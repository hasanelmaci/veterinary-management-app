import { Link } from "react-router-dom";


function ChatCustomerItem({ customer, id }) {
  return (
    <Link key={customer._id} to={`/chat/${customer._id}`}>
      <li className={`customer-item ${customer._id === id && "selected-chat-customer"} `}>
        <div className="customer-item-content">
           <p>{customer.username}</p>
        </div>
      </li>
    </Link>
  );
}

export default ChatCustomerItem;

import { Link } from "react-router-dom";
import nocustomerpic from "../../styles/img/nocustomerpic.png";

function ChatCustomerItem({ customer, id }) {
  return (
    <Link key={customer._id} to={`/chat/${customer._id}`}>
      <li className={`customer-item ${customer._id === id && "selected-chat-customer"} `}>
        <div className="customer-item-content">
          <img src={nocustomerpic} className="avatar" alt="profile_avatar" /> <p>{customer.username}</p>
        </div>
      </li>
    </Link>
  );
}

export default ChatCustomerItem;

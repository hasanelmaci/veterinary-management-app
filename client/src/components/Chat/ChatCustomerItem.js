import { Link } from "react-router-dom";

function ChatCustomerItem({ customer }) {
  return (
      <Link key={customer._id} to={`/chat/${customer._id}`}>
        
    <li className='customer-item'>
      <div className='customer-item-content'>
        {customer.username}
      </div>
    </li>
      </Link>
  );
}

export default ChatCustomerItem;

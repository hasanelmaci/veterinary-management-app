import { Link } from "react-router-dom";

function ChatCustomerItem({ customer }) {
  return (
    <li>
      <Link key={customer._id} to={`/chat/${customer._id}`}>
        {customer.username}
      </Link>
    </li>
  );
}

export default ChatCustomerItem;

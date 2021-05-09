import {memo} from 'react'
import ChatCustomerItem from "./ChatCustomerItem";

function ChatCustomerList({ customers, isVisible,id }) {
  return (
    <div className={`customer-list ${isVisible ? "visible" : "hidden"}`}>
      <ul>
        {customers.map((customer) => (
          <ChatCustomerItem key={customer._id} customer={customer} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default memo(ChatCustomerList);

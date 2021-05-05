import ChatCustomerItem from "./ChatCustomerItem";

function ChatCustomerList({ customers, isVisible }) {
  return (
    <div className={`customer-list ${isVisible ? "visible" : "hidden"}`}>
      <ul>
        {customers.map((customer) => (
          <ChatCustomerItem key={customer._id} customer={customer} />
        ))}
      </ul>
    </div>
  );
}

export default ChatCustomerList;
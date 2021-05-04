import ChatCustomerItem from "./ChatCustomerItem";

function ChatCustomerList({ customers }) {
  return (
    <div className='customer-list'>
      <ul>
        {customers.map((customer) => (
          <ChatCustomerItem key={customer._id} customer={customer} />
        ))}
      </ul>
    </div>
  );
}

export default ChatCustomerList;

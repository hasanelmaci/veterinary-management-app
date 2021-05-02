import ChatCustomerItem from './ChatCustomerItem'

function ChatCustomerList({ customers }) {
  return (
    <div>
      <ul>
        {customers.map((customer) => (
         
         <ChatCustomerItem key={customer._id} customer={customer} />
        ))}
      </ul>
    </div>
  );
}

export default ChatCustomerList;

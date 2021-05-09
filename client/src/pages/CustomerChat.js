import { useState, useEffect, useContext } from "react";
import { receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import ChatCustomerInput from "../components/Chat/ChatCustomerInput";
import CustomerChatBoxContainer from "../components/Chat/CustomerChatBoxContainer";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerMenu from "../components/CustomerProfile/CustomerMenu";

function CustomerChat() {
  const { customer } = useContext(CustomerAuthContext);
  const [newMsg, setNewMsg] = useState({});
  useEffect(() => {
    initSocket();

    joinRoom(customer, customer._id);
    receiveMessage((user, msg) => {
      setNewMsg({ user, msg });
    });
    return () => disconnectSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveMessage, customer._id]);
  return (
    <div>
<CustomerHeader customer={customer}/>
<CustomerMenu />
    <div className='chat'>
      <div className='chat-container'>
      <CustomerChatBoxContainer newMsg={{ author: newMsg.user, message: newMsg.msg }} />
      <ChatCustomerInput customer={customer.username} customerid={customer._id} />
      </div>
    </div>
    </div>
  );
}

export default CustomerChat;

import { useState, useEffect, useContext } from "react";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import FetchCustomers from "../components/Chat/FetchCustomers";
import ChatContainer from "../components/Chat/ChatContainer";
import ChatInput from "../components/Chat/ChatInput";
import { Link, useParams } from "react-router-dom";
import CustomerContext from "../context/customer/customerContext";
import UserContext from "../context/userAuth/userAuthContext";
import ChatBox from "../components/Chat/ChatBox";

function Chat() {
  let { id } = useParams();
  const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);
  const { user } = useContext(UserContext);
  const [newMsg, setNewMsg] = useState({});

  useEffect(() => {
    initSocket();

    joinRoom(user, id);
    receiveMessage((msg) => {
      setNewMsg({user:user.name,msg});
    });
    return () => disconnectSocket();
  }, [receiveMessage, id]);

  useEffect(() => {
    console.log('ASD')
    fetchOneCustomer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <FetchCustomers />

      <ChatInput />
      <ChatBox newMsg={newMsg} />
    </div>
  );
}

export default Chat;

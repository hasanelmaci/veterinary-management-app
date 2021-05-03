import { useState, useEffect, useContext } from "react";
import { receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import FetchCustomers from "../components/Chat/FetchCustomers";
import ChatInput from "../components/Chat/ChatInput";
import { useParams } from "react-router-dom";
import UserContext from "../context/userAuth/userAuthContext";
import ChatBoxContainer from "../components/Chat/ChatBoxContainer";

function Chat() {
  let { id } = useParams();
  const { user } = useContext(UserContext);
  const [newMsg, setNewMsg] = useState({});

  useEffect(() => {
    initSocket();
    console.log("Joined");

    joinRoom(user, id);
    receiveMessage((user, msg) => {
      setNewMsg({ user, msg });
    });
    return () => disconnectSocket();
  }, [receiveMessage, id]);

  return (
    <div>
      <FetchCustomers />

      <ChatInput user={user.name} />
      <ChatBoxContainer newMsg={{ author: newMsg.user, message: newMsg.msg }} id={id} />
    </div>
  );
}

export default Chat;

import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import FetchCustomers from "../components/Chat/FetchCustomers";
import ChatInput from "../components/Chat/ChatInput";
import UserContext from "../context/userAuth/userAuthContext";
import ChatBoxContainer from "../components/Chat/ChatBoxContainer";

function Chat() {
  let { id } = useParams();
  const { user } = useContext(UserContext);
  const [newMsg, setNewMsg] = useState({});

  useEffect(() => {
    initSocket();

    joinRoom(user, id);
    receiveMessage((user, msg) => {
      setNewMsg({ user, msg });
    });
    return () => disconnectSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveMessage, id]);

  return (
    <div className='chat'>
      <div className='chat-container'>
        <div className='chat-list-content'>
      <FetchCustomers />
      <div className='chat-input-content'>

      <ChatBoxContainer newMsg={{ author: newMsg.user, message: newMsg.msg }} id={id} />
      <ChatInput user={user.name} />
      </div>
        </div>

      </div>
    </div>
  );
}

export default Chat;

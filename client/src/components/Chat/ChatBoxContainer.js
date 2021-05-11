import { useState, useEffect } from "react";
import axios from "axios";
import ChatBox from "./ChatBox";

function ChatBoxContainer({ newMsg, id }) {
  const [newMessage, setNewMessage] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const { data } = await axios.get(`/api/chat/${id}`);
      setNewMessage(data);
    }
    getMessages();
    //prevent rendering same message when id change
    newMsg.message = undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (newMsg.message !== undefined) {
      setNewMessage([...newMessage, newMsg]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMsg]);

  return (
    <>
      <ChatBox newMessage={newMessage} />
    </>
  );
}

export default ChatBoxContainer;

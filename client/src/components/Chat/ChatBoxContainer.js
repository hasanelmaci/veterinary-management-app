import { useState, useEffect } from "react";
import axios from "axios";
import ChatBox from "./ChatBox";

function ChatBoxContainer({ newMsg, id }) {
  const [newMessage, setNewMessage] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const { data } = await axios.get(`/chat/${id}`);
      setNewMessage(data);
    }
    getMessages();
  }, [id]);

  useEffect(() => {
    if (newMsg.message !== undefined) {
      setNewMessage([...newMessage, newMsg]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMsg]);

  return (
    <div>
      <ChatBox newMessage={newMessage} />
    </div>
  );
}

export default ChatBoxContainer;

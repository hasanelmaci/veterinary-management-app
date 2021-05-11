import { useState, useEffect } from "react";
import axios from "axios";
import ChatBox from "./ChatBox";

function CustomerChatBoxContainer({ newMsg }) {
  const [newMessage, setNewMessage] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const { data } = await axios.get(`/api/customerchat`);
      setNewMessage(data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    getMessages();
  }, []);

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

export default CustomerChatBoxContainer;

import { useState, useEffect } from "react";
import { receiveMessage } from "../../socketService";

function ChatBox({ newMsg,id }) {
  const [newMessage, setNewMessage] = useState([]);

  useEffect(()=>{
    setNewMessage([])
  },[id])

  useEffect(() => {
    setNewMessage([...newMessage, newMsg]);
  }, [newMsg]);
  {console.log(newMsg)}
  return (
    <div>
      {newMessage.map((msg) => (
        <p>
          {msg.user} - {msg.msg}
        </p>
      ))}
    </div>
  );
}

export default ChatBox;

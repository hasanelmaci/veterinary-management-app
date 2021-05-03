import { useState, useEffect } from "react";
import { receiveMessage } from "../../socketService";
import axios from 'axios'

function ChatBox({ newMsg,id }) {
  const [newMessage, setNewMessage] = useState([]);

  useEffect( async ()=>{
    const data = await axios.get(`/chat/${id}`)  
    console.log(data.data)
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

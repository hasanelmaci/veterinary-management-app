import { useState, useEffect } from "react";
import { receiveMessage } from "../../socketService";
import axios from 'axios'

function ChatBox({ newMessage }) {
  // const [newMessage, setNewMessage] = useState([]);

  // useEffect( async ()=>{

  //   const data = await axios.get(`/chat/${id}`)  
  //   console.log(data.data)
  //   setNewMessage(data.data)
    
  // },[id])

  // useEffect(() => {
  //   if(newMsg.message !== undefined){
  //     setNewMessage([...newMessage, newMsg]);
  //   }
  // }, [newMsg]);
  
  // {console.log(newMsg)}
  return (
    <div>
      {newMessage?.map((msg) => (
        <p>
          {msg.author} - {msg.message}
        </p>
      ))}
    </div>
  );
}

export default ChatBox;

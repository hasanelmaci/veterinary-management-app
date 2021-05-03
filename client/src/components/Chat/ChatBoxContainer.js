import { useState, useEffect } from "react";
import { receiveMessage } from "../../socketService";
import axios from 'axios'
import ChatBox from "./ChatBox";

function ChatBoxContainer({newMsg,id}) {


    const [newMessage, setNewMessage] = useState([]);

    useEffect( async ()=>{
  
      const data = await axios.get(`/chat/${id}`)  
      console.log(data.data)
      setNewMessage(data.data)
      
    },[id])
  
    useEffect(() => {
      if(newMsg.message !== undefined){
        setNewMessage([...newMessage, newMsg]);
      }
    }, [newMsg]);

    return (
        <div>
        <ChatBox newMessage={newMessage}/>
      </div>
    )
}

export default ChatBoxContainer

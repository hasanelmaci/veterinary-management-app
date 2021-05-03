import { useState, useEffect } from "react";
import { receiveMessage } from "../../socketService";
import axios from 'axios'
import ChatBox from "./ChatBox";

function CustomerChatBoxContainer({newMsg}) {

    const [newMessage, setNewMessage] = useState([])

    useEffect(async()=>{

        const data = await axios.get(`/customerchat`)
        setNewMessage(data.data)

    },[])

    useEffect(()=>{
        if(newMsg.message !==undefined){
            setNewMessage([...newMessage,newMsg])
        }
    },[newMsg])

    return (
        <div>
            <ChatBox newMessage={newMessage} />
        </div>
    )
}

export default CustomerChatBoxContainer

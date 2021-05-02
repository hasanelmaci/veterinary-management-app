import { useState, useEffect, useContext } from "react";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import { Link, useParams } from "react-router-dom";
import ChatBox from '../components/Chat/ChatBox'
import ChatInput from '../components/Chat/ChatInput'
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";

function CustomerChat() {
    let { id } = useParams();
    const {customer} = useContext(CustomerAuthContext)
    const [newMsg, setNewMsg] = useState({});
    useEffect(() => {
        initSocket();
    
        joinRoom(customer, id);
        receiveMessage((user,msg) => {
        console.log(user,msg)
          setNewMsg({user,msg});
        });
        return () => disconnectSocket();
      }, [receiveMessage, id]);
    return (
        <div>
            <ChatInput user={customer.username}/>
            <ChatBox newMsg={newMsg} />
        </div>
    )
}

export default CustomerChat

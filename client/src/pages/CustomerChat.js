import { useState, useEffect, useContext } from "react";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import { Link, useParams } from "react-router-dom";
import ChatBox from '../components/Chat/ChatBox'
import ChatInput from '../components/Chat/ChatInput'
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import ChatCustomerInput from "../components/Chat/ChatCustomerInput";
import CustomerChatBoxContainer from "../components/Chat/CustomerChatBoxContainer";

function CustomerChat() {
    const {customer} = useContext(CustomerAuthContext)
    const [newMsg, setNewMsg] = useState({});
    useEffect(() => {
        initSocket();
    
        joinRoom(customer, customer._id);
        receiveMessage((user,msg) => {
        console.log(user,msg)
          setNewMsg({user,msg});
        });
        return () => disconnectSocket();
      }, [receiveMessage, customer._id]);
    return (
        <div>
            <ChatCustomerInput customer={customer.username} customerid={customer._id}/>
            {/* <ChatBox newMsg={newMsg} /> */}
            <CustomerChatBoxContainer newMsg={{author:newMsg.user,message:newMsg.msg}} />
        </div>
    )
}

export default CustomerChat

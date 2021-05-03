import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CustomerContext from "../../context/customer/customerContext";
import { useContext, useEffect, useState } from "react";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../../socketService";
import InputForm from "./InputForm";

function ChatInput({ user }) {
  let { id } = useParams();
  const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    axios.post(`/chat/${id}`, { message: input, author: user });

    e.preventDefault();
    sendMessage([id, user, input]);
  };
  return (
    <div>

      <InputForm handleSubmit={handleSubmit} setInput={setInput} input={input}/>
    </div>
  );
}

export default ChatInput;

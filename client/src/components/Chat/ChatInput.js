import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CustomerContext from "../../context/customer/customerContext";
import { useContext, useEffect, useState } from "react";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../../socketService";

function ChatInput({ user }) {
  let { id } = useParams();
  const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    //Bu kısım customer ve user olarak iki farklı componente ayrılcak
    axios.post(`/chat/${id}`, { message: input, author: user });

    e.preventDefault();
    sendMessage([id, user, input]);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default ChatInput;

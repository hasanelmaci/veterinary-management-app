import { Link, useParams } from "react-router-dom";
import CustomerContext from "../../context/customer/customerContext";
import { useContext, useEffect, useState } from "react";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../../socketService";

function ChatInput() {
    let { id } = useParams();
  const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage([id, input]);
  };
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button>Gönder</button>
        </form>
      </div>
    
    )
}

export default ChatInput

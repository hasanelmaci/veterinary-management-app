import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CustomerContext from "../../context/customer/customerContext";
import { sendMessage, receiveMessage, initSocket, disconnectSocket, joinRoom } from "../../socketService";

function ChatContainer({ customers }) {
  let { id } = useParams();
  const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage([id, input]);
  };
    
  console.log(customers);

  useEffect(() => {
    initSocket();

    joinRoom("Deneme", id);
    receiveMessage();
    return () => disconnectSocket();
  }, [receiveMessage, id]);

  useEffect(() => {
    fetchOneCustomer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {customers.map((customer) => (
        <Link key={customer._id} to={`/chat/${customer._id}`}>
          {customer.username}
        </Link>
      ))}

      <h1>{customer?.username}</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default ChatContainer;

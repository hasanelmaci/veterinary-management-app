import axios from "axios";
import { useState } from "react";
import { sendMessage } from "../../socketService";
import InputForm from "./InputForm";

function ChatCustomerInput({ customer, customerid }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    axios.post(`/customerchat`, { message: input, author: customer });
    e.preventDefault();
    sendMessage([customerid, customer, input]);
  };
  return (
    <div>
      <InputForm handleSubmit={handleSubmit} setInput={setInput} input={input} />
    </div>
  );
}

export default ChatCustomerInput;

import axios from "axios";
import { useState } from "react";
import { sendMessage } from "../../socketService";
import InputForm from "./InputForm";

function ChatCustomerInput({ customer, customerid }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      axios.post(`/api/customerchat`, { message: input, author: customer });
      sendMessage([customerid, customer, input]);
      setInput("");
    }
  };
  return (
    <div>
      <InputForm handleSubmit={handleSubmit} setInput={setInput} input={input} />
    </div>
  );
}

export default ChatCustomerInput;

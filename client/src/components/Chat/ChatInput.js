import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { sendMessage } from "../../socketService";
import InputForm from "./InputForm";

function ChatInput({ user }) {
  let { id } = useParams();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    axios.post(`/chat/${id}`, { message: input, author: user });

    e.preventDefault();
    sendMessage([id, user, input]);
  };
  return (
    <div>
      <InputForm handleSubmit={handleSubmit} setInput={setInput} input={input} />
    </div>
  );
}

export default ChatInput;

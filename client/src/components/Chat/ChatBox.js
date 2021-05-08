import { useRef, useEffect } from "react";
import MessageItem from "./MessageItem";

function ChatBox({ newMessage }) {
  const chatboxRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [newMessage]);

  return (
    <div ref={chatboxRef} className="chatbox">
      <ul>
        {newMessage?.map((msg, i) => (
          <MessageItem key={i} msg={msg} />
        ))}
      </ul>
    </div>
  );
}

export default ChatBox;

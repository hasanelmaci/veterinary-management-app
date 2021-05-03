import MessageItem from "./MessageItem";

function ChatBox({ newMessage }) {
  return (
    <div>
      {newMessage?.map((msg, i) => (
        <MessageItem key={i} msg={msg} />
      ))}
    </div>
  );
}

export default ChatBox;

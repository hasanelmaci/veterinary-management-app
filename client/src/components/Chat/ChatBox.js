import MessageItem from "./MessageItem";

function ChatBox({ newMessage }) {
  return (
    <div className='chatbox'>
      <ul>
      {newMessage?.map((msg, i) => (
        <MessageItem key={i} msg={msg} />
        ))}
        </ul>
    </div>
  );
}

export default ChatBox;

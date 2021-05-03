function MessageItem({ msg }) {
  return (
    <p>
      {msg.author} - {msg.message}
    </p>
  );
}

export default MessageItem;

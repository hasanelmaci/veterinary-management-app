import { useContext } from "react";
import userAuthContext from "../../context/userAuth/userAuthContext";
import customerAuthContext from "../../context/customerAuth/customerAuthContext";

function MessageItem({ msg }) {
  const { user } = useContext(userAuthContext);
  const { customer } = useContext(customerAuthContext);

  return (
    <li className={user?.name === msg.author || customer?.username === msg.author ? "right" : "left"}>
      <div className="message">
        {msg.author} - {msg.message}
      </div>
    </li>
  );
}

export default MessageItem;

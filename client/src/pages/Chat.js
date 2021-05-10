import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { receiveMessage, initSocket, disconnectSocket, joinRoom } from "../socketService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import FetchCustomers from "../components/Chat/FetchCustomers";
import ChatInput from "../components/Chat/ChatInput";
import UserContext from "../context/userAuth/userAuthContext";
import CustomerContext from "../context/customer/customerContext";
import ChatBoxContainer from "../components/Chat/ChatBoxContainer";

function Chat(props) {
  const { fetchOneCustomer, customer, error, clearErrors } = useContext(CustomerContext);

  let { id } = useParams();
  const { user } = useContext(UserContext);
  const [newMsg, setNewMsg] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (error) {
      return props.history.push("/login");
    }
    setNewMsg({}); //prevent to sending previous message when change customer on list
    initSocket();

    joinRoom(user, id);
    receiveMessage((user, msg) => {
      setNewMsg({ user, msg });
    });
    return () => disconnectSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchOneCustomer(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setNewMsg({});
  };

  useEffect(() => {
    if (error) {
      props.history.push("/");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOneCustomer]);
  return (
    <div>
      <div className="customer-list-toggle" onClick={handleToggle}>
        <p className="toggle-icon">
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
        <p className="chat-username">{customer?.username}</p>
      </div>
      <div className="chat userchat">
        <div className="chat-container">
          <div className="chat-list-content">
            <FetchCustomers isVisible={isVisible} id={id} />
            <div className="chat-input-content">
              <ChatBoxContainer newMsg={{ author: newMsg.user, message: newMsg.msg }} id={id} />
              <ChatInput user={user.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

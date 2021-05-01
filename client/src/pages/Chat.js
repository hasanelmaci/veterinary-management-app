import { useState,useEffect } from "react";
import { sendMessage,receiveMessage,initSocket,disconnectSocket,joinRoom } from "../socketService";
import FetchCustomers from '../components/Chat/FetchCustomers'
import ChatContainer from '../components/Chat/ChatContainer'

function Chat() {
    // const [input, setInput] = useState("");

    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     sendMessage(['aa',input]);
    // };

    // useEffect(()=>{
    //     receiveMessage()
    // },[])

    return (
        <div>
            <FetchCustomers />
            {/* <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button>Gönder</button>
            </form> */}
        </div>
    );
}

export default Chat;

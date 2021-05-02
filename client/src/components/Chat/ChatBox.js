import {useState, useEffect} from 'react'
import {receiveMessage} from '../../socketService'

function ChatBox({newMsg}) {

    const [newMessage,setNewMessage] = useState([])

    useEffect(()=>{
       setNewMessage([...newMessage,newMsg])
    },[newMsg])
    return (
        <div>
            {newMessage.map(msg=>(
                <p>{msg.user}  -   {msg.msg}</p>
            ))}
        </div>
    )
}

export default ChatBox

import {Link,useParams} from 'react-router-dom'
import {useContext,useEffect} from 'react';
import CustomerContext from '../../context/customer/customerContext'
import { sendMessage,receiveMessage,initSocket,disconnectSocket,joinRoom } from "../../socketService";

function ChatContainer({customers}) {
    let {id} = useParams()
    const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);
    
    console.log(customers)
    
    useEffect(() => {
        initSocket();   

        joinRoom('Deneme',id)

        return () => disconnectSocket();
      }, [receiveMessage]);

    useEffect(() => {
        fetchOneCustomer(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>

            {customers.map((customer)=>(
                <Link key={customer._id} to={`/chat/${customer._id}`}>{customer.username}</Link>
            ))}     

            <h1>{customer?.username}</h1>

        </div>
    )
}

export default ChatContainer

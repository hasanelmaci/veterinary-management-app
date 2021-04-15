import {useContext,useState} from 'react'
import CustomerContext from '../../context/customer/customerContext';

function Customers() {

    const {customer,fetchCustomers} = useContext(CustomerContext);

    useState(()=>{
        fetchCustomers()
    },[])

    return (
        <div>
            {customer?.map(i=>(
                <p>{i.username} - {i.email}</p>
            ))}
        </div>
    )
}

export default Customers

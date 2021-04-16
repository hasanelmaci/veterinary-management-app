import {useContext,useEffect,useState} from 'react'
import CustomerContext from '../../context/customer/customerContext';
import CustomerItem from './CustomerItem'

function Customers() {

    const {customerList,fetchCustomers,loading,customer} = useContext(CustomerContext);

    useEffect(()=>{
        fetchCustomers()
    },[customer])


    return (
        <div>
            <ul>

            {customerList.map(item=>(
                <CustomerItem key={item._id} customer={item}/>
                ))}
                </ul>
        </div>
    )
}

export default Customers

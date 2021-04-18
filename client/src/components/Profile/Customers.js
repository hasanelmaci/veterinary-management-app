import {useContext,useEffect,useState} from 'react'
import CustomerContext from '../../context/customer/customerContext';
import CustomerItem from './CustomerItem'

function Customers() {

    const {customerList,fetchCustomers,clearErrors,customer,error} = useContext(CustomerContext);

    useEffect(()=>{
        fetchCustomers()
    },[customer])

    useEffect(()=>{
        if(error?.data === 'Invalid updates'){
        }
        clearErrors()
    },[error])


    return (
        <div>
            <ul>

            {customerList.map(item=>(
                <CustomerItem key={item._id} infos={item}/>
                ))}
                </ul>
        </div>
    )
}

export default Customers

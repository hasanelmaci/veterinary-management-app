import {Link} from 'react-router-dom'
import {useContext} from 'react';
import CustomerContext from '../../context/customer/customerContext'

function CustomerItem({customer}) {

    const {deleteCustomer} = useContext(CustomerContext)

    const handleDelete = (id) =>{
        deleteCustomer(id)
    }


    return (
        <li>
            <Link to={`/customers/${customer._id}`}  >{customer.username} - {customer.email} </Link><button onClick={() => handleDelete(customer._id)}>Sil</button>
        </li>
    )
}

export default CustomerItem

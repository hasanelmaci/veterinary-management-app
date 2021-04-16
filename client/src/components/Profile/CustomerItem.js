import {Link} from 'react-router-dom'

function CustomerItem({customer}) {
    return (
        <li>
            <Link to={`/customers/${customer._id}`}  >{customer.username} - {customer.email}</Link>
        </li>
    )
}

export default CustomerItem

import {Link} from 'react-router-dom'
import UpdateCustomerPopup from "../Profile/UpdateCustomerPopup"
import AddPet from "../Pet/AddPet"

function CustomerSettings({customer}) {
    return (
        <div>
            <Link to={`/customers/${customer._id}/update`} >Güncelle</Link>
        </div>
    )
}

export default CustomerSettings

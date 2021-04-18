import UpdateCustomerPopup from "../Profile/UpdateCustomerPopup"
import AddPet from "../Pet/AddPet"

function CustomerSettings({customer}) {
    return (
        <div>

            <UpdateCustomerPopup infos={customer}/>
            <button>Delete</button>
           <AddPet customer={customer}/>
        </div>
    )
}

export default CustomerSettings

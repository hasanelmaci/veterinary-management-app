import {useParams,Link} from 'react-router-dom'
import { useContext, useState,useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";

function UpdateCustomer() {

    let id = useParams()

    const {updateCustomer} = useContext(CustomerContext)

    const [updatedCustomer, setUpdatedCustomer] = useState({})
    const [message, setMessage] = useState(false)

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        updateCustomer(id.id,updatedCustomer)
        setMessage(true)
    }

    const handleOnChange =(e)=>{
        const inputObject = {[e.target.name]:e.target.value}
        setUpdatedCustomer({...updatedCustomer,...inputObject})
        console.log(updatedCustomer)
    }

    return (
        <div className="addcustomer-container">
        <div className="addcustomer">
            <h1>Müşteri Güncelle</h1>
            <form onSubmit={handleOnSubmit}>
                <input placeholder="isim" name="username"  onChange={handleOnChange} />
                <input type='email' placeholder="email" name="email" onChange={handleOnChange} />
                <input placeholder="şifre" name="password" onChange={handleOnChange} />
                <button type="submit">Güncelle</button>
            </form>
            {message && <p>Müşteri eklendi. <Link to='/profile' > Anasayfaya dön</Link></p>}
        </div>
    </div>
    )
}

export default UpdateCustomer

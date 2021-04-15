import {useContext, useEffect} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"
import CustomerContext from '../context/customer/customerContext'
import Navbar from "../components/Profile/Navbar"
import Customers from "../components/Profile/Customers"
import AddCustomer from "../components/Profile/AddCustomer"


const Profile = () => {
    return (
        <div className='profile'>

            <Navbar />
            <AddCustomer />
            <Customers />
        </div>
    )
}

export default Profile

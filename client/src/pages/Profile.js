import {useContext, useEffect,useState} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"
import CustomerContext from '../context/customer/customerContext'
import Navbar from "../components/Profile/Navbar"
import Customers from "../components/Profile/Customers"
import AddCustomer from "../components/Profile/AddCustomer"
import SearchBar from '../components/Profile/SearchBar'


const Profile = () => {

    const [searchInput, setSearchInput] = useState("")

    const search = (e) =>{
        setSearchInput(e.target.value)
    }
    return (
        <div className='profile'>

            {/* <Navbar /> */}
            {/* <AddCustomer /> */}
            <div className='profile-top'>
            <h1>Müşteriler</h1>
            <SearchBar search={search}/>
            </div>
            <Customers searchInput={searchInput}/>
        </div>
    )
}

export default Profile

import {useContext, useEffect} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"
import Navbar from "../components/Profile/Navbar"
import Customers from "../components/Profile/Customers"


const Profile = () => {
    const userAuthContext = useContext(UserAuthContext)

    const {loading,user,logout} = userAuthContext
    
    // const handleLogout = ()=>{
    //     logout()
    // }


    return (
        <div className='profile'>

            <Navbar />
            <Customers />
            {/* {JSON.stringify(user)} */}
            {/* {!loading ? user.name : 'null'}
            Profile
            <button onClick={handleLogout}>Logout</button> */}
        </div>
    )
}

export default Profile

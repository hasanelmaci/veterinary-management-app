import {useContext, useEffect} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"
import Header from "../components/Profile/Header"


const Profile = () => {
    const userAuthContext = useContext(UserAuthContext)

    const {loading,user,logout} = userAuthContext
    
    // const handleLogout = ()=>{
    //     logout()
    // }


    return (
        <div>

            <Header />
            {/* {JSON.stringify(user)} */}
            {/* {!loading ? user.name : 'null'}
            Profile
            <button onClick={handleLogout}>Logout</button> */}
        </div>
    )
}

export default Profile

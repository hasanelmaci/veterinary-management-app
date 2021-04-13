import {useContext, useEffect} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"


const Profile = () => {
    const userAuthContext = useContext(UserAuthContext)

    const {loadUser,login,isUserAuth} = userAuthContext
    
    useEffect(()=>{
        loadUser()
    },[])

    return (
        <div>
            Profile
        </div>
    )
}

export default Profile

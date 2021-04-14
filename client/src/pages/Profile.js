import {useContext, useEffect} from 'react'
import UserAuthContext from "../context/userAuth/userAuthContext"


const Profile = () => {
    const userAuthContext = useContext(UserAuthContext)

    const {loadUser,loading,login,isUserAuth,user} = userAuthContext
    
    {console.log(user)}
    return (
        <div>
            {/* {JSON.stringify(user)} */}
            {!loading ? user.name : 'null'}
            Profile
        </div>
    )
}

export default Profile

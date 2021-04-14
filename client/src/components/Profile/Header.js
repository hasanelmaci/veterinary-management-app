import {useContext, useEffect} from 'react'
import UserAuthContext from "../../context/userAuth/userAuthContext";

function Header() {

    const userAuthContext = useContext(UserAuthContext)

    const {loading,user,logout} = userAuthContext

    return (
        <div>
            {user.name}
        </div>
    )
}

export default Header

import {useContext} from 'react'
import UserAuthContext from "../../context/userAuth/userAuthContext"

function Customers() {

    const {loading,user,error,clearErrors} = useContext(UserAuthContext);

    return (
        <div>
            
        </div>
    )
}

export default Customers

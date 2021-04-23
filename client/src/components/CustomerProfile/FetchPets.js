import {useContext, useEffect} from 'react'
import CustomerAuthContext from '../../context/customerAuth/customerAuthContext'
import PetList from "../CustomerProfile/PetList"

function FetchPets({customer}) {
    const {fetchAllPets,petList} =useContext(CustomerAuthContext);

    useEffect(()=>{
        fetchAllPets(customer._id)
    },[])

    return (
        <div>
           <PetList petList={petList}/>
        </div>
    )
}

export default FetchPets

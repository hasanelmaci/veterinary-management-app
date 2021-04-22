import {useContext,useEffect,useState} from 'react';
import CustomerAuthContext from '../context/customerAuth/customerAuthContext'


function CustomerProfile() {

 
    const {petList,fetchAllPets} = useContext(CustomerAuthContext)
    useEffect(()=>{
        fetchAllPets()
    },[])

    return (
        <div>
            {petList.map((item)=>(
                <p>{item.name}</p>
            ))}     
        </div>
    )
}

export default CustomerProfile

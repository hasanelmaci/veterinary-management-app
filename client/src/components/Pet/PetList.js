import { useContext, useState, useEffect } from "react";
import PetContext from "../../context/pet/petContext";


function PetList({customer}) {

    const {fetchPets,petList,loading} = useContext(PetContext);

    useEffect(()=>{
        fetchPets(customer._id)
        console.log('FETCH COMPONENT')
    },[])

    console.log(petList)
    return (
        <div>
            {petList.map(pet =>(
                <p key={pet._id}>{pet.name}</p>
            ))}
        </div>
    )
}

export default PetList

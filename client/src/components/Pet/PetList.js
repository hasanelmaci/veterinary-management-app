import { useContext, useState, useEffect } from "react";
import PetContext from "../../context/pet/petContext";


function PetList({customer}) {

    const {fetchPets,petList,loading} = useContext(PetContext);

    useEffect(()=>{
        fetchPets(customer._id)
        console.log('FETCH COMPONENT')
    },[loading])

    console.log(petList)
    return (
        <div>
            {petList.map(pet =>(
                <p>{pet.name}</p>
            ))}
        </div>
    )
}

export default PetList

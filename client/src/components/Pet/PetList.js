import { useContext, useEffect } from "react";
import PetContext from "../../context/pet/petContext";


function PetList({customer}) {

    const {fetchPets,petList,loading} = useContext(PetContext);

    useEffect(()=>{
        fetchPets(customer._id)
    },[])
    return (
        <div>
            {petList.map(pet =>(
                <p key={pet._id}>{pet.name}</p>
            ))}
        </div>
    )
}

export default PetList

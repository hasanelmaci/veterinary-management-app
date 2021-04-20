import { useContext, useEffect } from "react";
import PetContext from "../../context/pet/petContext";
import PetCard from "./PetCard";


function PetList({customer}) {

    const {fetchPets,petList,loading} = useContext(PetContext);

    useEffect(()=>{
        fetchPets(customer._id)
    },[])

    return (
        <div className='pet-list-container'>
            <h2>Evcil hayvanları</h2>
        <div className='pet-list'>
            
            {petList.map(pet =>(
                <PetCard key={pet._id}  pet={pet}/>
                ))}
        </div>
                </div>
    )
}

export default PetList

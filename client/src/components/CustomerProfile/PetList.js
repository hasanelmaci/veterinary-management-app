import React from 'react'
import PetCard from './PetCard'

function PetList({petList}) {
   

    return (
        <div className='pet-list-container'>
            <h2>Evcil hayvanlarım</h2>
        <div className='pet-list'>
            
            {petList.map(pet =>(
                <PetCard key={pet._id}  pet={pet}/>
                ))}
        </div>
                </div>
    )
}

export default PetList

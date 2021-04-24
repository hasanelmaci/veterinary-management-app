import {useContext} from 'react'
import {Link} from 'react-router-dom'
import paw from '../../styles/img/paw.jpg'
import PetState from '../../context/pet/PetState'

function PetHeader({pet}) {



console.log(pet)
    return (
        <div className='pet-header'>
            
            <div className='pet-avatar'>
                <img src={pet.avatar}/>
            </div>
            <div className='pet-profile-infos'>
            <h1>{pet.name}</h1>
                <p>{pet.animal} {pet.type}</p>
                <p>{pet.gender} {pet.birthdate}</p>
            </div>
        </div>
    )
}

export default PetHeader
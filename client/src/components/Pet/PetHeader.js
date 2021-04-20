import {Link} from 'react-router-dom'
import paw from '../../styles/img/paw.jpg'

function PetHeader({pet}) {
    return (
        <div className='pet-header'>
            <div className='pet-avatar'>
                <img src={paw}/>
            </div>
            <div className='pet-profile-infos'>
            <h1>{pet.name}</h1>
                <p>{pet.animal}, {pet.type}</p>
                <p>{pet.gender}, {pet.birthDate}</p>
                <Link to={`/customers/pets/${pet._id}/update`}>Güncelle</Link> 
            </div>
        </div>
    )
}

export default PetHeader
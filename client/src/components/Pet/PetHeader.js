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
                <p>{pet.animal} {pet.type}</p>
                <p>{pet.gender} {pet.birthdate}</p>
                <Link to={`/customers/${pet.owner}/${pet._id}/updatepet`}>Bilgileri güncelle</Link> 
            </div>
        </div>
    )
}

export default PetHeader
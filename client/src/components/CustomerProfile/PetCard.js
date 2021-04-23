import {Link} from 'react-router-dom'
import paw from '../../styles/img/paw.jpg'

function PetCard({pet}) {
    return (
        <div className='pet-card'>
            <Link to={`/customerprofile/${pet._id}`}>
            <div className='pet-avatar-container'>
            <img  src={paw}/>
            </div>
            <div className='pet-card-info-bottom'>

        <p>{pet.name}</p>
        <p><span>{pet.type}</span></p>
            </div>
            </Link>
        </div>
    )
}

export default PetCard

import {Link} from 'react-router-dom'
import paw from '../../styles/img/paw.jpg'

function PetCard({pet}) {

    const addDefaultSrc = (ev) =>  {
        ev.target.onError =null
        ev.target.src = paw
      }
    return (
        <div className='pet-card'>
            <Link to={`/customers/${pet.owner}/${pet._id}`}>
            <div className='pet-avatar-container'>
            <img  src={`/pets/${pet._id}/avatar`} onError={addDefaultSrc}/>
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

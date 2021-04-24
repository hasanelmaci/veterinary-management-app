import {useEffect,useContext} from 'react'
import { useParams,Link} from 'react-router-dom'
import PetHeader from '../components/Pet/PetHeader';
import TreatmentList from '../components/Pet/TreatmentList';
import PetContext from '../context/pet/petContext'

function PetProfile() {
    let {id,petid} = useParams();

    const {fetchOnePet,loading,pet} = useContext(PetContext);

    useEffect(()=>{
        if(loading !='pet_data_fetched'){
            fetchOnePet(id,petid)
          
        }
    },[loading])

    return (
        <>
        {loading=='pet_data_fetched'&& 
        <div className='pet-profile'>,
            <div className='pet-profile-infos'>

            <PetHeader pet={pet} />
            <Link to={`/customers/${pet.owner}/${pet._id}/updatepet`}>Bilgileri güncelle</Link> 
            </div>

            <TreatmentList pet={pet} />
        </div>
            }
            </>
    )
}

export default PetProfile

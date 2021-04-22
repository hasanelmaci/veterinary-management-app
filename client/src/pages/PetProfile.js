import {useEffect,useContext} from 'react'
import { useParams} from 'react-router-dom'
import PetHeader from '../components/Pet/PetHeader';
import TreatmentList from '../components/Pet/TreatmentList';
import PetContext from '../context/pet/petContext'

function PetProfile() {
    let {id,petid} = useParams();

    const {fetchOnePet,loading,pet} = useContext(PetContext);

    useEffect(()=>{
        if(loading !='pet_data_fetched'){
            fetchOnePet(id,petid)
            console.log('FETHC????')
        }
    },[loading])

    return (
        <>
        {loading=='pet_data_fetched'&& 
        <div className='pet-profile'>
            <PetHeader pet={pet} />
            
            <TreatmentList pet={pet} />
        </div>
            }
            </>
    )
}

export default PetProfile

import {useEffect,useContext} from 'react'
import { useParams } from 'react-router'
import PetHeader from '../components/Pet/PetHeader';
import PetContext from '../context/pet/petContext'

function PetProfile() {
    let {id,petid} = useParams();

    const {fetchOnePet,loading,pet} = useContext(PetContext);

    useEffect(()=>{
        fetchOnePet(id,petid)
        console.log('ONE FETCH')
    },[loading])

    return (
        <div>
            {loading=='pet_fetched'  && 
            
            <PetHeader pet={pet} />
            }
        </div>
    )
}

export default PetProfile

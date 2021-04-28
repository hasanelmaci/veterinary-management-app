import {useContext} from 'react'
import PetContext from "../../context/pet/petContext";

function PastTreatments({pasttreatments,pet}) {

    const {deletePastTreatment} = useContext(PetContext)

    const handleDelete = () =>{
        deletePastTreatment(pet._id,pasttreatments._id)
    }
    return (
        <>
            <tr>
                <td>
                    {pasttreatments.type}
                </td>
                <td>
                {pasttreatments.medicine}
                </td>
                <td>
                {pasttreatments.number}
                </td>
                <td>
                {pasttreatments.date}
                </td>
                <td>
                    <button onClick={()=>handleDelete()} >X</button>
                </td>
            </tr>
        </>
    )
}

export default PastTreatments

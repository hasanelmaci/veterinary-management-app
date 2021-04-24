import {useParams,Link} from 'react-router-dom'
import { useContext, useState,useEffect } from "react";
import PetContext from "../../context/pet/petContext";

function UpdatePet() {

    let {id,petid} = useParams()

    const {updatePet} = useContext(PetContext)

    const [updatedPet, setUpdatedPet] = useState({})
    const [message, setMessage] = useState(false)

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        updatePet(id,petid,updatedPet)
        setMessage(true)
    }

    const handleOnChange =(e)=>{
        
        const inputObject = {[e.target.name]:e.target.value}
        setUpdatedPet({...updatedPet,...inputObject})
    }


    return (
        <div className="update-pet-container">
        <div className="updatepet">
       
            <h1>Bilgileri Güncelle</h1>
            <form  onSubmit={handleOnSubmit}>
                <input placeholder="İsim" name="name"  onChange={handleOnChange} />
                <input placeholder="Tür" name="animal" onChange={handleOnChange} />
                <input placeholder="Cins" name="type" onChange={handleOnChange} />
                <input placeholder="Cinsiyet" name="gender" onChange={handleOnChange} />
                <input placeholder="Doğum Yılı" name="birthdate" onChange={handleOnChange} />
                <button type="submit">Güncelle</button>

            </form>
            
            {message && <p>Bilgiler güncellendi. <Link to={`/customers/${id}/${petid}`} > Profile Dön</Link></p>}
   
            
            
            
            


        </div>
    </div>
    )
}

export default UpdatePet


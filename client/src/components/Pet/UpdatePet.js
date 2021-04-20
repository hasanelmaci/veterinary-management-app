import {useParams,Link} from 'react-router-dom'
import { useContext, useState,useEffect } from "react";
import PetContext from "../../context/pet/petContext";

function UpdateCustomer() {

    let {petid} = useParams()

    const {updatePet,deletePet} = useContext(PetContext)

    const [updatedPet, setUpdatedPet] = useState({})
    const [message, setMessage] = useState(false)

    const [deleteInput,setDeleteInput] = useState(false)

    useEffect(()=>{
        setDeleteInput(false)
    },[])

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        updatePet(petid,updatedPet)
        setMessage(true)
    }

    const handleOnChange =(e)=>{
        const inputObject = {[e.target.name]:e.target.value}
        setUpdatedPet({...updatedPet,...inputObject})
    }



    const handleDelete = () =>{
        deletePet(petid)
    }

    return (
        <div className="update-container">
        <div className="updatecustomer">
            {deleteInput ?
            <div className='delete-customer'>
                <h1>Müşteriyi Sil</h1>
            <p>Müşteri silmek istediğinize emin misiniz?</p>
            <div className='buttons'>
            <Link to='/profile'>
            <button onClick={()=>handleDelete()}>Evet</button>
            </Link>
            <button onClick={()=>setDeleteInput(false)}>Hayır</button>
            </div>
            </div>
            :
            <>
            <h1>Müşteri Güncelle</h1>
            <form  onSubmit={handleOnSubmit}>
                <input placeholder="İsim" name="username"  onChange={handleOnChange} />
                <input type='email' placeholder="Email" name="email" onChange={handleOnChange} />
                <input placeholder="Parola" name="password" onChange={handleOnChange} />
                <button type="submit">Güncelle</button>
                <p style={{color:'red',cursor:'pointer'}} onClick={()=>setDeleteInput(true)}>Müşteriyi Sil</p>
            </form>
            
            {message && <p>Müşteri eklendi. <Link to='/profile' > Anasayfaya dön</Link></p>}
            </>
            
            
            
            }


        </div>
    </div>
    )
}

export default UpdateCustomer


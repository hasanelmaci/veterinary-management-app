import { useContext, useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import PetContext from "../../context/pet/petContext";

function AddPet({ customer }) {
    const { addPet } = useContext(PetContext);

    const [pet, setPet] = useState({});

    let id = useParams()

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addPet(id.id, pet);
    };

    const handleOnChange = (e) => {
        const inputObject = { [e.target.name]: e.target.value };
        setPet({ ...pet, ...inputObject });
    };

    return (
        <div className='addpet-container'>
        <div className='addpet'>
            <h1>Evcil Hayvan Ekle</h1>
            <form onSubmit={handleOnSubmit}>
                <input placeholder="İsim" name="name" onChange={handleOnChange} />
                <input placeholder="Tür" name="animal" onChange={handleOnChange} />
                <input placeholder="Cins" name="type" onChange={handleOnChange} />
                <input placeholder="Cinsiyet" name="gender" onChange={handleOnChange} />
                <button type="submit">Ekle</button>
            </form>
        </div>
        </div>
    );
}

export default AddPet;

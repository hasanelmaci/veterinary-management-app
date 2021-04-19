import { useContext, useState, useEffect } from "react";
import PetContext from "../../context/pet/petContext";

function AddPet({ customer }) {
    const { addPet } = useContext(PetContext);

    const [pet, setPet] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addPet(customer._id, pet);
    };

    const handleOnChange = (e) => {
        const inputObject = { [e.target.name]: e.target.value };
        setPet({ ...pet, ...inputObject });
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input placeholder="isim" name="name" onChange={handleOnChange} />
                <input placeholder="tür" name="animal" onChange={handleOnChange} />
                <input placeholder="cins" name="type" onChange={handleOnChange} />
                <input placeholder="gender" name="gender" onChange={handleOnChange} />
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
}

export default AddPet;

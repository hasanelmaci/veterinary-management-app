import { useContext, useState, useEffect } from "react";
import PetContext from "../../context/pet/petContext";

function AddPet({ customer }) {
    const { addPet } = useContext(PetContext);

    const [pet, setPet] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addPet(customer._id, {
            name: "Maya",
            animal: "Köpek",
            type: "Husky ",
        });
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input placeholder="isim" />
                <input placeholder="tür" />
                <input placeholder="cins" />
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
}

export default AddPet;

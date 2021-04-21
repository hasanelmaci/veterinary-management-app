import { useContext, useState,memo } from "react";
import PetContext from "../../context/pet/petContext";

function AddTreatment({ treatmentType, pet }) {
    const { addUpcomingTreatment, addPastTreatment } = useContext(PetContext);

    const [treatment, setTreatment] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (treatmentType === "upcoming") {
            addUpcomingTreatment(pet._id, treatment);
        } else {
            addPastTreatment(pet._id, treatment);
        }
    };

    const handleOnChange = (e) => {
        console.log(treatment);
        const inputObject = { [e.target.name]: e.target.value };
        setTreatment({ ...treatment, ...inputObject });
    };



    return (
        <div className="addtreatment-container">
            <form onSubmit={handleOnSubmit}>
                <input placeholder="Tedavi Türü" name="type" onChange={handleOnChange} required />
                <input placeholder="Kullanılan İlaç" name="medicine" onChange={handleOnChange} />
                <input placeholder="Adet" name="number" onChange={handleOnChange} />
                <input placeholder="Tarih" name="date" onChange={handleOnChange} />
                
                <button>Ekle</button>
            </form>
        </div>
    );
}

export default AddTreatment;

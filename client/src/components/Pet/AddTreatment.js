import { useContext, useState } from "react";
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
    const inputObject = { [e.target.name]: e.target.value };
    setTreatment({ ...treatment, ...inputObject });
  };

  return (
    <div className="addtreatment-container">
      <form onSubmit={handleOnSubmit} autoComplete="off">
        <input placeholder="Type" name="type" onChange={handleOnChange} required />
        <input placeholder="Medicine" name="medicine" onChange={handleOnChange} />
        <input placeholder="Number" name="number" onChange={handleOnChange} />
        <input placeholder="Date" name="date" onChange={handleOnChange} />

        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default AddTreatment;

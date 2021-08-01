import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import PetContext from "../context/pet/petContext";

function UpdatePet(props) {
  let { id, petid } = useParams();

  const { updatePet, error, clearErrors, fetchOnePet } = useContext(PetContext);

  const [updatedPet, setUpdatedPet] = useState({});
  const [message, setMessage] = useState(false);

  useEffect(() => {
    fetchOnePet(id, petid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updatePet(id, petid, updatedPet);
    setMessage(true);
  };

  const handleOnChange = (e) => {
    const inputObject = { [e.target.name]: e.target.value };
    setUpdatedPet({ ...updatedPet, ...inputObject });
  };

  useEffect(() => {
    if (error) {
      props.history.push("/");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePet, fetchOnePet]);

  return (
    <div className="update-pet-container">
      <div className="updatepet">
        <h1>Edit informations</h1>
        <form onSubmit={handleOnSubmit}>
          <input placeholder="Name" name="name" onChange={handleOnChange} />
          <input placeholder="Animal" name="animal" onChange={handleOnChange} />
          <input placeholder="Type" name="type" onChange={handleOnChange} />
          <input placeholder="Gender" name="gender" onChange={handleOnChange} />
          <input placeholder="Birth Date" name="birthdate" type='date' onChange={handleOnChange} />
          <button type="submit" className="btn">
            Edit
          </button>
        </form>

        {message && (
          <p>
            Informations have been updated. <Link to={`/customers/${id}/${petid}`}> Turn back to profile.</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default UpdatePet;

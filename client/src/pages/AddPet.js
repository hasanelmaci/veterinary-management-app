import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CustomerContext from "../context/customer/customerContext";
import PetContext from "../context/pet/petContext";

function AddPet(props) {
  const { addPet, error, clearErrors } = useContext(PetContext);
  const customer = useContext(CustomerContext);

  const [pet, setPet] = useState({});
  const [message, setMessage] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    customer.fetchOneCustomer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error || customer.error) {
      props.history.push("/");
      clearErrors();
      customer.clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addPet, customer.fetchOneCustomer]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addPet(id, pet);
    setMessage(true);
  };

  const handleOnChange = (e) => {
    const inputObject = { [e.target.name]: e.target.value };
    setPet({ ...pet, ...inputObject });
  };

  return (
    <div className="addpet-container">
      <div className="addpet">
        <h1>Add Pet</h1>
        <form onSubmit={handleOnSubmit}>
          <input placeholder="Name" name="name" onChange={handleOnChange} />
          <input placeholder="Animal" name="animal" onChange={handleOnChange} />
          <input placeholder="Type" name="type" onChange={handleOnChange} />
          <input placeholder="Gender" name="gender" onChange={handleOnChange} />
          <input placeholder="Birth Date" name="birthdate" type='date' onChange={handleOnChange} />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        {message && (
          <p>
            New pet has been added.{" "}
            <Link to={`/customers/${id}`} onClick={() => setMessage(false)}>
              {" "}
              Turn back to profile.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default AddPet;

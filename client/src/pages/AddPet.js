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
        <h1>Evcil Hayvan Ekle</h1>
        <form onSubmit={handleOnSubmit}>
          <input placeholder="İsim" name="name" onChange={handleOnChange} />
          <input placeholder="Tür" name="animal" onChange={handleOnChange} />
          <input placeholder="Cins" name="type" onChange={handleOnChange} />
          <input placeholder="Cinsiyet" name="gender" onChange={handleOnChange} />
          <input placeholder="Doğum Tarihi" name="birthdate" onChange={handleOnChange} />
          <button type="submit" className="btn">
            Ekle
          </button>
        </form>
        {message && (
          <p>
            Yeni evcil hayvan eklendi.{" "}
            <Link to={`/customers/${id}`} onClick={() => setMessage(false)}>
              {" "}
              Profile dön.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default AddPet;

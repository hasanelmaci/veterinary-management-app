import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";

function UpdateCustomer() {
  let { id } = useParams();

  const { updateCustomer, deleteCustomer } = useContext(CustomerContext);

  const [updatedCustomer, setUpdatedCustomer] = useState({});
  const [message, setMessage] = useState(false);

  const [deleteInput, setDeleteInput] = useState(false);

  useEffect(() => {
    setDeleteInput(false);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateCustomer(id, updatedCustomer);
    setMessage(true);
  };

  const handleOnChange = (e) => {
    const inputObject = { [e.target.name]: e.target.value };
    setUpdatedCustomer({ ...updatedCustomer, ...inputObject });
  };

  const handleDelete = () => {
    deleteCustomer(id);
  };

  return (
    <div className="update-container">
      <div className="updatecustomer">
        {deleteInput ? (
          <div className="delete-customer">
            <h1>Müşteriyi Sil</h1>
            <p>Müşteri silmek istediğinize emin misiniz?</p>
            <div className="buttons">
              <Link to="/profile">
                <button className="btn" onClick={() => handleDelete()}>
                  Evet
                </button>
              </Link>
              <button className="btn" onClick={() => setDeleteInput(false)}>
                Hayır
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>Müşteri Güncelle</h1>
            <form onSubmit={handleOnSubmit}>
              <input placeholder="İsim" name="username" onChange={handleOnChange} />
              <input type="email" placeholder="Email" name="email" onChange={handleOnChange} />
              <input placeholder="Parola" name="password" onChange={handleOnChange} />
              <button type="submit" className="btn">
                Güncelle
              </button>
              <p style={{ color: "red", cursor: "pointer" }} onClick={() => setDeleteInput(true)}>
                Müşteriyi Sil
              </p>
            </form>

            {message && (
              <p>
                Müşteri güncellendi. <Link to={`/customers/${id}`}> Profile dön.</Link>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default UpdateCustomer;

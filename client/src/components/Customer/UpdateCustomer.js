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
            <h1>Delete Customer</h1>
            <p>Are you sure?</p>
            <div className="buttons">
              <Link to="/profile">
                <button className="btn" onClick={() => handleDelete()}>
                  Yes
                </button>
              </Link>
              <button className="btn" onClick={() => setDeleteInput(false)}>
                No
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>Edit Customer</h1>
            <form onSubmit={handleOnSubmit}>
              <input placeholder="Name" name="username" onChange={handleOnChange} />
              <input  placeholder="Email or Phone" name="email" onChange={handleOnChange} />
              <input placeholder="Password" name="password" onChange={handleOnChange} />
              <button type="submit" className="btn">
                Edit
              </button>
              <p style={{ color: "red", cursor: "pointer" }} onClick={() => setDeleteInput(true)}>
                Delete Customer
              </p>
            </form>

            {message && (
              <p>
               Customer has been edited. <Link to={`/customers/${id}`}> Profile dön.</Link>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default UpdateCustomer;

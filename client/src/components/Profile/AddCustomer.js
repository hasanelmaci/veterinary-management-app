import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CustomerContext from "../../context/customer/customerContext";

function AddCustomer(props) {
  const { addCustomer } = useContext(CustomerContext);

  const [customer, setCustomer] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(false);

  const { username, email, password } = customer;

  const handleOnChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addCustomer({ username, email, password });
    setMessage(true);
  };

  const toHomePage = () => {
    setMessage(false);
  };

  return (
    <div className="addcustomer-container">
      <div className="addcustomer">
        <h1>Add Customer</h1>
        <form onSubmit={handleOnSubmit} autoComplete="off">
          <input placeholder="Name" name="username" value={username} onChange={handleOnChange} />
          <input type="email" placeholder="E-mail" name="email" value={email} onChange={handleOnChange} />
          <input placeholder="Password" name="password" value={password} onChange={handleOnChange} />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        {message && (
          <p>
            Customer has been added.{" "}
            <Link to="/profile" onClick={toHomePage}>
              {" "}
              Return to homepage.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default AddCustomer;

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
                <h1>Müşteri Ekle</h1>
                <form onSubmit={handleOnSubmit}>
                    <input placeholder="isim" name="username" value={username} onChange={handleOnChange} />
                    <input type="email" placeholder="email" name="email" value={email} onChange={handleOnChange} />
                    <input placeholder="şifre" name="password" value={password} onChange={handleOnChange} />
                    <button type="submit">Ekle</button>
                </form>
                {message && (
                    <p>
                        Müşteri eklendi.{" "}
                        <Link to="/profile" onClick={toHomePage}>
                            {" "}
                            Anasayfaya dön
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default AddCustomer;

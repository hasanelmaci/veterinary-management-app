import React from "react";
import Popup from "reactjs-popup";
import { useContext, useState, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";

const AddCustomerPopup = () => {
    const { addCustomer, error, clearErrors } = useContext(CustomerContext);
    const [isValid, setIsValid] = useState(null);

    const [customer, setCustomer] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = customer;

    const handleOnChange = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        addCustomer({ username, email, password });
        setIsValid(false);
        clearErrors();
    };

    useEffect(() => {
        if (error) {
            setIsValid(true);
        }
        clearErrors();
    }, [error]);

    return (
        <Popup trigger={<button className="button"> Open Modal </button>} modal nested>
            {(close) => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                        <div className="add-customer">
                            <form onSubmit={handleOnSubmit}>
                                <input placeholder="isim" name="username" value={username} onChange={handleOnChange} />
                                <input placeholder="email" name="email" value={email} onChange={handleOnChange} />
                                <input placeholder="şifre" name="password" value={password} onChange={handleOnChange} />
                                <button type="submit">Ekle</button>
                            </form>
                        </div>
                    </div>
                    {isValid == true ? "ERROR" : null}
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                console.log("modal closed ");
                                close();
                            }}
                        >
                            close modal
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default AddCustomerPopup;

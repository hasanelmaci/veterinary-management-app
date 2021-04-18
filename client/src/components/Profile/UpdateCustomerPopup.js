import Popup from "reactjs-popup";
import { useContext, useState, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";

function UpdateCustomerPopup({ infos }) {
    const { updateCustomer, error, clearErrors } = useContext(CustomerContext);
    const [isValid, setIsValid] = useState(null);

    const [customerUpdateInfos, setCustomerUpdateInfos] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = customerUpdateInfos;
    const handleUpdate = (e) => {
        e.preventDefault();
        updateCustomer({ ...infos, ...customerUpdateInfos });
        setIsValid(false);
        clearErrors();
    };

    const handleChange = (e) => {
        setCustomerUpdateInfos({ ...customerUpdateInfos, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (error?.data === "Invalid updates") {
            setIsValid(true);
        }
        clearErrors();
        console.log("object");
    }, [error, isValid]);

    return (
        <Popup trigger={<button className="button"> Update </button>} modal nested>
            {(close) => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                        <div className="add-customer">
                            <form onSubmit={(e) => handleUpdate(e)}>
                                <input placeholder="isim" name="username" value={username} onChange={handleChange} />
                                <input placeholder="email" name="email" value={email} onChange={handleChange} />
                                <input placeholder="şifre" name="password" value={password} onChange={handleChange} />
                                <button type="submit">Güncelle</button>
                            </form>
                        </div>
                    </div>
                    {isValid == true ? "ERROR" : null}
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                console.log("modal closed ");
                                setIsValid(false);
                                clearErrors();
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
}

export default UpdateCustomerPopup;

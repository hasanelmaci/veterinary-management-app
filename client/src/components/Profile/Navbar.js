import { Link } from "react-router-dom";
import { useContext } from "react";
import UserAuthContext from "../../context/userAuth/userAuthContext";
import AddCustomerPopup from "./AddCustomerPopup";

function Navbar() {
    const userAuthContext = useContext(UserAuthContext);

    const { user, logout, isUserAuth } = userAuthContext;

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            {isUserAuth ? (
                <div className="nav">
                    <h1>{user.name}</h1>
                    <ul>
                        <AddCustomerPopup />
                        <Link to="#">
                            <li>Ayarlar</li>
                        </Link>
                        <Link to="#" onClick={handleLogout}>
                            <li>Çıkış Yap</li>
                        </Link>
                    </ul>
                </div>
            ) : null}
        </>
    );
}

export default Navbar;

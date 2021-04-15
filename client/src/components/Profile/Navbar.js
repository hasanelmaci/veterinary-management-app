import { Link } from "react-router-dom";
import { useContext, } from "react";
import UserAuthContext from "../../context/userAuth/userAuthContext";

function Navbar() {
    const userAuthContext = useContext(UserAuthContext);

    const { user, logout } = userAuthContext;

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="nav">
            <h1>{user.name}</h1>
            <ul>
                <Link to='#'>
                    <li>Müşteri Ekle</li>
                </Link>
                <Link to='#'>
                    <li>Ayarlar</li>
                </Link>
                <Link to='#' onClick={handleLogout}>
                    <li>Çıkış Yap</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;

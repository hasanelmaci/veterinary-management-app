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
                <Link>
                    <li>Müşteri Ekle</li>
                </Link>
                <Link>
                    <li>Ayarlar</li>
                </Link>
                <Link onClick={handleLogout}>
                    <li>Çıkış Yap</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;

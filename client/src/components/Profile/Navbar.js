import { Link } from "react-router-dom";
import { useContext } from "react";
import UserAuthContext from "../../context/userAuth/userAuthContext";

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
                    <div className='nav-container'>
                    <Link to="/profile">
                        <h1>{user.name}</h1>
                    </Link>
                    <ul>
                        <Link to="/profile/addcustomer">Müşteri ekle</Link>
                       
                        <Link to="#" onClick={handleLogout}>
                            <li>Çıkış Yap</li>
                        </Link>
                    </ul>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Navbar;

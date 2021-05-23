import { Link } from "react-router-dom";
import { useContext, memo } from "react";
import UserAuthContext from "../../context/userAuth/userAuthContext";
import DarkMode from "../../pages/DarkMode";
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
          <div className="nav-container">
            <Link to="/profile">
              <h1>{user.name}</h1>
            </Link>
            <ul>
              <li>
                <DarkMode />
              </li>

              <li>
                <Link to="/profile/addcustomer">Add Customer</Link>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
              <li>
                <Link to="#" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default memo(Navbar);

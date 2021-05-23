import { Link } from "react-router-dom";
import { useContext } from "react";
import CustomerAuthContext from "../../context/customerAuth/customerAuthContext";

function CustomerMenu() {
  const { logout } = useContext(CustomerAuthContext);
  return (
    <div className="customer-settings">
      <Link to="/customerchat">Chat</Link>
      <Link to="#" onClick={logout}>
        Logout
      </Link>
    </div>
  );
}

export default CustomerMenu;

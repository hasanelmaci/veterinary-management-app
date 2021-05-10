import { Link } from "react-router-dom";
import { useContext } from "react";
import CustomerAuthContext from "../../context/customerAuth/customerAuthContext";

function CustomerMenu() {
  const { logout } = useContext(CustomerAuthContext);
  return (
    <div className="customer-settings">
      <Link to="/customerchat">Mesajlar</Link>
      <Link to="#" onClick={logout}>
        Çıkış Yap
      </Link>
    </div>
  );
}

export default CustomerMenu;

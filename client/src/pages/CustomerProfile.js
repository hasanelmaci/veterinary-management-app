import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import CustomerHeader from "../components/Customer/CustomerHeader";
import FetchPets from "../components/CustomerProfile/FetchPets";

function CustomerProfile() {
  const { fetchAllPets, customer, logout } = useContext(CustomerAuthContext);
  useEffect(() => {
    fetchAllPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="customer-profile">
      <CustomerHeader customer={customer} />
      <div className="customer-settings">
        <Link id="#" onClick={logout}>
          Çıkış Yap
        </Link>
      </div>
      <FetchPets customer={customer} />
    </div>
  );
}

export default CustomerProfile;

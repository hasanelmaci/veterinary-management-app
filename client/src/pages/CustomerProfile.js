import { useContext, useEffect } from "react";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import CustomerHeader from "../components/Customer/CustomerHeader";
import FetchPets from "../components/CustomerProfile/FetchPets";
import CustomerMenu from "../components/CustomerProfile/CustomerMenu";

function CustomerProfile() {
  const { fetchAllPets, customer, logout } = useContext(CustomerAuthContext);
  useEffect(() => {
    fetchAllPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="customer-profile">
      <CustomerHeader customer={customer} />
      <CustomerMenu />
      <FetchPets customer={customer} />
    </div>
  );
}

export default CustomerProfile;

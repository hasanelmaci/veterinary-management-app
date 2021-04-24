import { useContext, useEffect } from "react";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import FetchPets from "../components/CustomerProfile/FetchPets";

function CustomerProfile() {
    const { fetchAllPets, customer } = useContext(CustomerAuthContext);
    useEffect(() => {
        fetchAllPets();
    }, []);

    return (
        <div className="customer-profile">
            <CustomerHeader customer={customer} />
            <FetchPets customer={customer} />
        </div>
    );
}

export default CustomerProfile;

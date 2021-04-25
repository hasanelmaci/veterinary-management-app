import { useContext, useEffect } from "react";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";
import FetchPets from "../components/CustomerProfile/FetchPets";

function CustomerProfile() {
    const { fetchAllPets, customer } = useContext(CustomerAuthContext);
    useEffect(() => {
        fetchAllPets();
        console.log('fetchallpets')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="customer-profile">
            <CustomerHeader customer={customer} />
            <FetchPets customer={customer} />
        </div>
    );
}

export default CustomerProfile;

import { useParams } from "react-router-dom";
import {useContext, useEffect } from "react";
import CustomerContext from "../context/customer/customerContext";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerSettings from "../components/Customer/CustomerSettings";
import FetchPets from "../components/Pet/FetchPets";
function Customer() {
    const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

    let { id } = useParams();

    useEffect(() => {
        fetchOneCustomer(id);
    }, [loading]);

    return (
        <>
            {loading === "fetched" ? (
                <div>
                    <CustomerHeader customer={customer} />
                    
                    <CustomerSettings customer={customer} />
                    <FetchPets customer={customer} />

                </div>
            ) : (
                "LOADING"
            )}
        </>
    );
}

export default Customer;

import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CustomerContext from "../context/customer/customerContext";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerSettings from "../components/Customer/CustomerSettings";
import PetList from "../components/Pet/PetList";
function Customer() {
    const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

    let { id } = useParams();

    useEffect(() => {
        fetchOneCustomer(id);

        console.log("RENDERRRRRR");
    }, [loading]);

    const newTo={
        pathname:`customers/${id}/update`,
        customer:customer
    }

    return (
        <>
            {loading == "fetched" ? (
                <div>
                    <CustomerHeader customer={customer} />
                    <CustomerSettings customer={customer} />
                    <PetList customer={customer} />
                    
                </div>
            ) : (
                "LOADING"
            )}
        </>
    );
}

export default Customer;

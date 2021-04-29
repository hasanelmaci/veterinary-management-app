import { useParams } from "react-router-dom";
import {useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CustomerContext from "../context/customer/customerContext";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerSettings from "../components/Customer/CustomerSettings";
import FetchPets from "../components/Pet/FetchPets";
function Customer() {
    const { fetchOneCustomer, customer, loading } = useContext(CustomerContext);

    let { id } = useParams();

    useEffect(() => {
        fetchOneCustomer(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <div className='spinner'>
                <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={0} //3 secs
                />
                </div>
            )}
        </>
    );
}

export default Customer;

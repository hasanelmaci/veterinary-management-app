import { useContext, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import CustomerItem from "./CustomerItem";

function Customers({ searchInput }) {
    const { customerList, fetchCustomers, clearErrors, customer, error } = useContext(CustomerContext);
    useEffect(() => {
        fetchCustomers();
    }, [customer]);

    useEffect(() => {
        if (error?.data === "Invalid updates") {
        }
        clearErrors();
    }, [error]);

    return (
        <div className="customer-table-container">
            <table className="customer-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Müşteri Adı</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList.map((item) =>
                        item.username.includes(searchInput) ? <CustomerItem key={item._id} infos={item} /> : null
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;

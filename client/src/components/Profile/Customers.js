import { useContext, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import CustomerItem from "./CustomerItem";

function Customers({ searchInput }) {
    const { customerList, fetchCustomers, clearErrors, customer, error } = useContext(CustomerContext);
    useEffect(() => {
        fetchCustomers();
        console.log('customers')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [customer]);

    useEffect(() => {
        if (error?.data === "Invalid updates") {
        }
        clearErrors();
        console.log('customers')
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        item.username.toLowerCase().includes(searchInput.toLowerCase()) ? <CustomerItem key={item._id} infos={item} /> : null
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;

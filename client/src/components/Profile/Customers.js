import { useContext, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import CustomerItem from "./CustomerItem";

function Customers() {
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
                    {customerList.map((item) => (
                        <CustomerItem key={item._id} infos={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;

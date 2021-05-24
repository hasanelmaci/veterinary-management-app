import { useContext, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import CustomerItem from "./CustomerItem";

function Customers({ searchInput }) {
  const { customerList, fetchCustomers, clearErrors, customer, error } = useContext(CustomerContext);
  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

  useEffect(() => {
    if (error?.data === "Invalid updates") {
    }
    clearErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      {customerList.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>Customers are not found.</h2>
      ) : (
        <div className="customer-table-container">
          <table className="customer-table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {customerList.map((item) =>
                item.username.toLowerCase().includes(searchInput.toLowerCase()) ? (
                  <CustomerItem key={item._id} infos={item} />
                ) : null
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Customers;

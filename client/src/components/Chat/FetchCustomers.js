import { useContext, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import ChatCustomerList from "./ChatCustomerList";

function FetchCustomers() {
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
    <div>
      <ChatCustomerList customers={customerList} />
    </div>
  );
}

export default FetchCustomers;

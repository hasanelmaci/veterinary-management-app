import { useContext, useEffect } from "react";
import CustomerContext from "../../context/customer/customerContext";
import ChatCustomerList from "./ChatCustomerList";

function FetchCustomers({isVisible}) {
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
    <div className={isVisible ? `relativelist` : null} >
      <ChatCustomerList customers={customerList} isVisible={isVisible} />
    </div>
  );
}

export default FetchCustomers;

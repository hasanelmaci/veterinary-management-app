import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CustomerContext from "../context/customer/customerContext";
import UserAuthContext from "../context/userAuth/userAuthContext";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerSettings from "../components/Customer/CustomerSettings";
import FetchPets from "../components/Pet/FetchPets";
function Customer(props) {
  const { fetchOneCustomer, customer, loading, error, clearErrors } = useContext(CustomerContext);
  const { user} = useContext(UserAuthContext)

  let { id } = useParams();

  useEffect(() => {
    fetchOneCustomer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (error) {
      props.history.push("/");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOneCustomer]);

  return (
    <>
      {loading === "fetched" ? (
        <div>
          <CustomerHeader customer={customer} isAuthUser={user ? true : false}/>

          <CustomerSettings customer={customer} />
          <FetchPets customer={customer} />
        </div>
      ) : (
        <div className="spinner">
          <Loader type="Circles" color="#00BFFF" height={100} width={100} timeout={0} />
        </div>
      )}
    </>
  );
}

export default Customer;

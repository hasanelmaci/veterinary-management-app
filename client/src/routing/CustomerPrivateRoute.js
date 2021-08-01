import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";

const CustomerPrivateRoute = ({ component: Component, ...rest }) => {
  const customerAuthContext = useContext(CustomerAuthContext);
  const { isCustomerAuth, loading, loadCustomer } = customerAuthContext;

  useEffect(() => {
    if (!isCustomerAuth && loading) {
      loadCustomer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? <p>Loading...</p> : isCustomerAuth ? <Component {...props} /> : <Redirect to="/register" />
      }
    />
  );
};

export default CustomerPrivateRoute;

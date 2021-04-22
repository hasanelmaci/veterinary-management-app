import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import CustomerAuthContext from "../context/customerAuth/customerAuthContext";

const CustomerPrivateRoute = ({ component: Component, ...rest }) => {
    const customerAuthContext = useContext(CustomerAuthContext);
    const { isCustomerAuth, loading, loadCustomer } = customerAuthContext;

    useEffect(() => {
        loadCustomer();
        console.log('PRIVATE RENDER')
    }, []);

    return (
        <Route
        {...rest}
        render={(props) =>
            loading ? <p>Loading...</p> : isCustomerAuth ? <Component {...props} /> : <Redirect to="/customerlogin" />
            }
        />
    );
};

export default CustomerPrivateRoute;

import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import UserAuthContext from "../context/userAuth/userAuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userAuthContext = useContext(UserAuthContext);
    const { isUserAuth, loading, loadUser } = userAuthContext;

    useEffect(() => {
        loadUser();
        console.log('PRIVATE RENDER')
    }, []);

    return (
        <Route
        {...rest}
        render={(props) =>
            loading ? <p>Loading...</p> : isUserAuth ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;

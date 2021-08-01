import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import UserAuthContext from "../context/userAuth/userAuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userAuthContext = useContext(UserAuthContext);
  const { isUserAuth, loading, loadUser } = userAuthContext;

  useEffect(() => {
    if (!isUserAuth && loading) {
      loadUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <div className="spinner">
            <Loader type="Circles" color="#00BFFF" height={100} width={100} timeout={0} />
          </div>
        ) : isUserAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );
};

export default PrivateRoute;

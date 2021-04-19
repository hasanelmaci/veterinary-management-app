import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./styles/css/main.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routing/PrivateRoute";
import UserAuthState from "./context/userAuth/UserAuthState";
import UserAuthContext from "./context/userAuth/userAuthContext";
import CustomerState from "./context/customer/CustomerState";
import Navbar from "./components/Profile/Navbar";
import Customer from "./pages/Customer";
import PetState from "./context/pet/PetState";
import AddCustomer from "./components/Profile/AddCustomer";

function App() {
    const userAuthContext = useContext(UserAuthContext);

    const { loadUser, isUserAuth, user } = userAuthContext;

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <UserAuthState>
            <CustomerState>
                <PetState>
                    {isUserAuth}
                    <Router>
                        <Navbar />
                        {/* <Link to='/'>Home</Link>
            <Link to='/register'>register</Link>
            <Link to='/login'>login</Link>
        <Link to='/profile'>profile</Link> */}
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/profile" />
                            </Route>
                            <PrivateRoute exact path="/profile" component={Profile} />
                            <PrivateRoute exact path="/customers/:id" component={Customer} />
                            <PrivateRoute exact path="/profile/addcustomer" component={AddCustomer} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </Router>
                </PetState>
            </CustomerState>
        </UserAuthState>
    );
}

export default App;

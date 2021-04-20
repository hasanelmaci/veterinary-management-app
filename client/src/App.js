import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./styles/css/main.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routing/PrivateRoute";
import UserAuthState from "./context/userAuth/UserAuthState";
import CustomerState from "./context/customer/CustomerState";
import Navbar from "./components/Profile/Navbar";
import Customer from "./pages/Customer";
import PetState from "./context/pet/PetState";
import AddCustomer from "./components/Profile/AddCustomer";
import UpdateCustomer from "./components/Customer/UpdateCustomer";
import AddPet from "./components/Pet/AddPet"
import PetProfile from "./pages/PetProfile";

function App() {
    return (
        <UserAuthState>
            <CustomerState>
                <PetState>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/profile" />
                            </Route>
                            <PrivateRoute exact path="/profile" component={Profile} />
                            <PrivateRoute exact path="/customers/:id" component={Customer} />
                            <PrivateRoute exact path="/customers/:id/update" component={UpdateCustomer} />
                            <PrivateRoute exact path="/profile/addcustomer" component={AddCustomer} />
                            <PrivateRoute exact path="/customers/:id/addpet" component={AddPet} />
                            <PrivateRoute exact path="/customers/:id/:petid" component={PetProfile} />
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

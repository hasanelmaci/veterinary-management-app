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
import UpdatePet from './components/Pet/UpdatePet'
import CustomerLogin from './pages/CustomerLogin';
import CustomerAuthState from './context/customerAuth/CustomerAuthState'
import CustomerPrivateRoute from './routing/CustomerPrivateRoute'
import CustomerProfile from './pages/CustomerProfile'

function App() {
    return (
        <UserAuthState>
                <CustomerAuthState>
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
                            <PrivateRoute exact path="/customers/:id/:petid/updatepet" component={UpdatePet} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path='/customerlogin' component={CustomerLogin} />
                            <CustomerPrivateRoute exact path='/customerprofile' component={CustomerProfile} />
                        </Switch>
                    </Router>
                </PetState>
            </CustomerState>
                </CustomerAuthState>
        </UserAuthState>
    );
}

export default App;

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles/css/main.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CustomerAuthState from "./context/customerAuth/CustomerAuthState";
import UserAuthState from "./context/userAuth/UserAuthState";
import CustomerState from "./context/customer/CustomerState";
import PetState from "./context/pet/PetState";
import PrivateRoute from "./routing/PrivateRoute";
import CustomerPrivateRoute from "./routing/CustomerPrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PetProfile from "./pages/PetProfile";
import Customer from "./pages/Customer";
import CustomerChat from "./pages/CustomerChat";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerPetProfile from "./pages/CustomerPetProfile";
import Chat from "./pages/Chat";
import AddPet from "./pages/AddPet";
import UpdatePet from "./pages/UpdatePet";
import Navbar from "./components/Profile/Navbar";
import AddCustomer from "./components/Profile/AddCustomer";
import UpdateCustomer from "./components/Customer/UpdateCustomer";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Helmet>
        <title>Veterinary App</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
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
                  <PrivateRoute exact path="/chat" component={Chat} />
                  <PrivateRoute exact path="/chat/:id" component={Chat} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/customers/:id" component={Customer} />
                  <PrivateRoute exact path="/customers/:id/update" component={UpdateCustomer} />
                  <PrivateRoute exact path="/profile/addcustomer" component={AddCustomer} />
                  <PrivateRoute exact path="/customers/:id/addpet" component={AddPet} />
                  <PrivateRoute exact path="/customers/:id/:petid" component={PetProfile} />
                  <PrivateRoute exact path="/customers/:id/:petid/updatepet" component={UpdatePet} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/customerlogin" component={CustomerLogin} />
                  <CustomerPrivateRoute exact path="/customerprofile" component={CustomerProfile} />
                  <CustomerPrivateRoute exact path="/customerchat" component={CustomerChat} />
                  <CustomerPrivateRoute exact path="/customerprofile/:id" component={CustomerPetProfile} />
                  <Route path="*" exact={true} component={Page404} />
                </Switch>
              </Router>
            </PetState>
          </CustomerState>
        </CustomerAuthState>
      </UserAuthState>
    </>
  );
}

export default App;

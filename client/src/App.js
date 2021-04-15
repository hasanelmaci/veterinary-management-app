import { BrowserRouter as Router, Route, Switch, Link,Redirect } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./styles/css/main.css"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routing/PrivateRoute";
import UserAuthState from "./context/userAuth/UserAuthState";
import UserAuthContext from "./context/userAuth/userAuthContext";
import CustomerState from './context/customer/CustomerState';

function App() {
    const userAuthContext = useContext(UserAuthContext);

    const { loadUser,isUserAuth,user } = userAuthContext;

    useEffect(()=>{
        loadUser()
        console.log('LOADDD APPJS')
      },[])

    return (
        <UserAuthState>
            <CustomerState>
            {isUserAuth}
            <Router>
            {/* <Link to='/'>Home</Link>
            <Link to='/register'>register</Link>
            <Link to='/login'>login</Link>
        <Link to='/profile'>profile</Link> */}
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/profile"/>
                    </Route>
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </CustomerState>
        </UserAuthState>
    );
}

export default App;

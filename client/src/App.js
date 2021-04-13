import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import PrivateRoute from "./routing/PrivateRoute"
import UserAuthState from "./context/userAuth/UserAuthState"

function App() {

    


    return (
        <UserAuthState>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/profile" component={Profile}/>
                    <Route exact path ="/register" component={Register}/>
                    <Route exact path ="/login" component={Login}/>
                </Switch>
            </Router>
        </UserAuthState>
    );
}

export default App;

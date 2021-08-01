import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserAuthContext from "../../context/userAuth/userAuthContext";

const LoginForm = (props) => {
  const userAuthContext = useContext(UserAuthContext);

  const { login, isUserAuth, loadUser, error, clearErrors } = userAuthContext;
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    loadUser();
    if (isUserAuth) {
      props.history.push("/profile");
    }
    if (error) {
      setIsValid(false);
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuth, props.history, error]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Admin Login</h1>

        <form onSubmit={onSubmit}>
          <div>
            <input  name="email" value={email} placeholder="E-mail or Phone" onChange={onChange} />
          </div>
          <div>
            <input type="password" name="password" value={password} placeholder="Password" onChange={onChange} />
          </div>
          <div className="login__bottom">
            <button>Login</button>
            <Link to="/register">Sign up</Link>
            <Link to="/customerlogin">Login as customer</Link>
          </div>
        </form>
        {isValid === false && <p>Invalid username or password</p>}
      </div>
    </div>
  );
};

export default LoginForm;

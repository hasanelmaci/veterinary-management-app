import { useState, useContext, useEffect } from "react";
import userAuthContext from "../context/userAuth/userAuthContext";

const Register = (props) => {
    const { register, isUserAuth } = useContext(userAuthContext);

    useEffect(() => {
        if (isUserAuth) {
            props.history.push("/profile");
        }
    });

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        register({ name, email, password });
    };

    return (
        <div>
            <h1>
                <span>Register</span> Account
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;

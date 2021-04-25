import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import userAuthContext from "../../context/userAuth/userAuthContext";

const RegisterForm = (props) => {
    const { register, isUserAuth, loadUser, error, clearErrors } = useContext(userAuthContext);
    const [isValid, setIsValid] = useState(null);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        
        loadUser();
        if (isUserAuth) {
            props.history.push("/profile");
        }
        if (error) {
            setIsValid(false);
            clearErrors();
        }
        console.log('registerform')
        // eslint-disable-next-line 
    }, [isUserAuth, error, props.history]);



    
    const { name, email, password } = user;

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        register({ name, email, password });
    };

    return (
        <div className="register-container">
            <div className="register">
                <h1>Kayıt Ol</h1>
                <form className="register__form" onSubmit={onSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Veteriner Kliğinin Adı"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="E-mail"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Parola"
                            required
                        />
                    </div>
                    <div className="register__bottom">
                        <button type="submit">Kayıt Ol</button>
                        <Link to="/login">Giriş Yap</Link>
                    </div>
                </form>
                {isValid === false && <p>Bu e-mail daha önceden kullanıldı.</p>}
            </div>
        </div>
    );
};

export default RegisterForm;

import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import userAuthContext from "../../context/userAuth/userAuthContext";

const RegisterForm = (props) => {
  const { register, isUserAuth, loadUser, error, clearErrors } = useContext(userAuthContext);
  const [isValid, setIsValid] = useState(null);
  const [isMatched, setIsMatched] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
    // eslint-disable-next-line
  }, [isUserAuth, error, props.history]);

  const { name, email, password, password2 } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password === password2) {
      setIsMatched(true);
      return register({ name, email, password });
    }
    setIsMatched(false);
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
              placeholder="Veteriner Klinik Adı"
              required
            />
          </div>
          <div>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="E-mail" required />
          </div>
          <div>
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Parola" required />
          </div>
          <div>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Aynı parolayı giriniz"
              required
            />
          </div>
          <button type="submit">Kayıt Ol</button>
          <div className="register__bottom">
            <Link to="/login">Giriş Yap</Link>
          </div>
        </form>

        {isMatched === false ? (
          <p>Aynı parolayı girdiğinize emin olunuz.</p>
        ) : (
          isValid === false && <p>Bu e-mail daha önceden kullanıldı.</p>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;

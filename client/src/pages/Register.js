import { useState, useContext, useEffect } from "react";
import userAuthContext from "../context/userAuth/userAuthContext";
import RegisterForm from "../components/Register/RegisterForm"

const Register = (props) => {

    return (
        <>
       <RegisterForm history={props.history} />
       </>
    );
};

export default Register;

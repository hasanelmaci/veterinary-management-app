import { useState, useContext } from "react";
import userAuthContext from "../context/UserAuth/userAuthContext";

import React from "react";

function Register() {
    const [userInput, setUserInput] = useState("");
    const { register } = useContext(userAuthContext);

    const onChangeHandler = (e) => {
        setUserInput(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const user = {
            name: "Client User Denemesi",
            email: "8cud@gmail.com",
            password: "8cud",
        };

        register(user);
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={userInput} onChange={onChangeHandler} />
                <input type="submit" text="Gönder"></input>
            </form>
        </div>
    );
}

export default Register;

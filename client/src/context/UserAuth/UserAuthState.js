import { useReducer } from "react";
import axios from "axios";
import UserAuthContext from "./userAuthContext";
import userAuthReducer from "./userAuthReducer";
import setUserAuthToken from "../../utils/setUserAuthToken"
import { USER_REGISTER_SUCCESS,USER_LOADED,USER_AUTH_ERROR } from "./userAuthActions";

import React from "react";

function UserAuthState(props) {
    const initialState = {
        token: localStorage.getItem("utoken"),
        isAuthanticated: null,
        loading: null,
        user: null,
        error: null,
    };
    const [state, dispatch] = useReducer(userAuthReducer, initialState);

    const loadUser = async () =>{
        setUserAuthToken(localStorage.getItem('utoken'))
        try{
            const res = await axios.get("/users/me");
            console.log(res)
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        }catch(e){
            dispatch({type:USER_AUTH_ERROR})
        }
    }

    const register = async (formData) => {
        console.log(formData);

        try {
            const res = await axios.post("/users/register", formData);
            console.log(res);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: res.data,
            });
            loadUser()
        } catch (e) {
            console.log("ERROR: ", e);
        }
    };

    return (
        <UserAuthContext.Provider
            value={{
                token: state.token,
                isAuthanticated: state.isAuthanticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
            }}
        >
            {props.children}
        </UserAuthContext.Provider>
    );
}

export default UserAuthState;

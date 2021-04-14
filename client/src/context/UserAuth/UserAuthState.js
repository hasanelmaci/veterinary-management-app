import { useReducer } from "react";
import axios from "axios";
import UserAuthContext from "./userAuthContext";
import userAuthReducer from "./userAuthReducer";
import setUserAuthToken from "../../utils/setUserAuthToken";
import {
    USER_LOADED,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_AUTH_ERROR,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_CLEAR_ERRORS,
} from "./userAuthActions";

const UserAuthState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isUserAuth: null,
        loading: true,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(userAuthReducer, initialState);

    const loadUser = async () => {
        setUserAuthToken(localStorage.token);
        try {
            const res = await axios.get("/users/me");
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        } catch (err) {
            dispatch({ type: USER_AUTH_ERROR });
        }
    };

    const register = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post("/users/register", formData, config);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: res.data,
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: USER_REGISTER_FAIL,
            });
        }
    };

    const login = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post("/users/login", formData, config);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data,
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: USER_LOGIN_FAIL,
            });
        }
    };

    const logout = () => {
        dispatch({ type: USER_LOGOUT });
    };

    const clearErrors = () => {
        dispatch({ type: USER_CLEAR_ERRORS });
    };

    return (
        <UserAuthContext.Provider
            value={{
                token: state.token,
                isUserAuth: state.isUserAuth,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors,
            }}
        >
            {props.children}
        </UserAuthContext.Provider>
    );
};

export default UserAuthState;

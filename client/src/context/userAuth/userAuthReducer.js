import {
  USER_LOADED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_CLEAR_ERRORS,
  USER_AUTH_ERROR,
  USER_REGISTER_FAIL,
  USER_LOGIN_FAIL,
} from "./userAuthActions";

const userAuthReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isUserAuth: true,
        loading: false,
        user: action.payload,
      };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isUserAuth: true,
        loading: false,
      };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
    case USER_AUTH_ERROR:
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isUserAuth: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case USER_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userAuthReducer;

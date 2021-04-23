import { useReducer } from "react";
import axios from "axios";
import CustomerAuthContext from "./customerAuthContext";
import customerAuthReducer from "./customerAuthReducer";
import {
    CUSTOMER_LOADED,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGOUT,
    CUSTOMER_CLEAR_ERRORS,
    CUSTOMER_AUTH_ERROR,
    CUSTOMER_LOGIN_FAIL,FETCH_ALL_PETS_FAIL,FETCH_ALL_PETS_SUCCESS,FETCH_ONE_PET_FAIL,FETCH_ONE_PET_SUCCESS
   
} from "./customerAuthActions";
import setUserAuthToken from "../../utils/setUserAuthToken";

function CustomerAuthState(props) {
    const initialState = {
        token: localStorage.getItem("ctoken"),
        isCustomerAuth: null,
        loading: true,
        isFetched:false,
        customer: null,
        pet:null,
        petList:[],
        error: null,
    };

    const [state, dispatch] = useReducer(customerAuthReducer, initialState);

    const loadCustomer = async () => {
        setUserAuthToken(localStorage.getItem("ctoken"));
        try {
            const res = await axios.get("/asCustomers/me");
            console.log(res)
            dispatch({
                type: CUSTOMER_LOADED,
                payload: res.data,
            });
        } catch (err) {
            console.log('load error')
            dispatch({
                type: CUSTOMER_AUTH_ERROR,
            });
        }
    };

    const login = async (formData) =>{
        
        try{
            const res = await axios.post("/asCustomer/login",formData);
            dispatch({
                type:CUSTOMER_LOGIN_SUCCESS,
                payload:res.data
            })
            loadCustomer()
        }catch(err){
            dispatch({
                type:CUSTOMER_LOGIN_FAIL,
                payload:err.response.statusText
            })
        }
    }

    const fetchAllPets = async () =>{
        try{
            const res = await axios.get("/asCustomer/pets")
            dispatch({
                type:FETCH_ALL_PETS_SUCCESS,
                payload:res.data
            })
        }catch(err){
            dispatch({
                type:FETCH_ALL_PETS_FAIL,
                payload:err.response
            })
        }
    }

    const fetchOnePet = async (id) =>{
        try{
            const res = await axios.get(`/asCustomer/pet/${id}`)
            dispatch({
                type:FETCH_ONE_PET_SUCCESS,
                payload:res.data
            })
        }catch(err){
            dispatch({
                type:FETCH_ONE_PET_FAIL,
                payload:err.response
            })
        }
    }

    const logout = () =>{
        dispatch({type:CUSTOMER_LOGOUT})
    }

    const clearErrors = () => {
        dispatch({ type: CUSTOMER_CLEAR_ERRORS });
    };

    return (
        <CustomerAuthContext.Provider
            value={{
                token: state.token,
                isCustomerAuth: state.isCustomerAuth,
                loading: state.loading,
                isFetched:state.isFetched,
                customer: state.customer,
                pet:state.pet,
                petList:state.petList,
                error: state.error,
                loadCustomer,
                login,
                logout,
                clearErrors,
                fetchAllPets,
                fetchOnePet
            }}
        >
            {props.children}
        </CustomerAuthContext.Provider>
    );
}

export default CustomerAuthState;

import { useReducer } from "react";
import axios from "axios";
import CustomerContext from "./customerContext";
import customerReducer from "./customerReducer";
import {
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_FAIL,
    CUSTOMER_CLEAR_ERRORS,
    FETCH_CUSTOMERS_SUCCESS,
    FETCH_CUSTOMERS_FAIL,
    UPDATE_CUSTOMER_FAIL,
    UPDATE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAIL,
    DELETE_CUSTOMER_SUCCESS,
} from "./customerActions";

function CustomerState(props) {
    const initialState = {
        customer: null,
        customerList: [],
        loading: true,
        error: null,
    };
    const [state, dispatch] = useReducer(customerReducer, initialState);

    const addCustomer = async (formData) => {
        try {
            const res = await axios.post("/user/addcustomer", formData);
            dispatch({
                type: ADD_CUSTOMER_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: ADD_CUSTOMER_FAIL,
                payload: err.response,
            });
        }
    };

    const fetchCustomers = async () => {
        try {
            const res = await axios.get("/customers");
            dispatch({
                type: FETCH_CUSTOMERS_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: FETCH_CUSTOMERS_FAIL,
                payload: err.response,
            });
        }
    };

    const updateCustomer = async (customer) => {
        //If inputs are not empty or valid ?
        const allowedUpdates = ["username", "email", "password"];
        const picks = {};
        for (const item in customer) {
            if (customer[item] != "" && allowedUpdates.includes(item)) {
                picks[item] = customer[item];
            }
        }

        try {
            const res = await axios.patch(`/customers/${customer._id}`, picks);
            console.log(res.data);
            dispatch({
                type: UPDATE_CUSTOMER_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            console.log(customer._id);
            dispatch({
                type: UPDATE_CUSTOMER_FAIL,
                payload: err.response,
            });
        }
    };

    const deleteCustomer = async (id) => {
        try {
            await axios.delete(`/customers/${id}`);
            dispatch({
                type: DELETE_CUSTOMER_SUCCESS,
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: DELETE_CUSTOMER_FAIL,
                payload: err.response,
            });
        }
    };

    const clearErrors = () => {
        dispatch({ type: CUSTOMER_CLEAR_ERRORS });
      };

    return (
        <CustomerContext.Provider
            value={{
                customer: state.customer,
                customerList: state.customerList,
                loading: state.loading,
                error: state.error,
                addCustomer,
                fetchCustomers,
                deleteCustomer,
                updateCustomer,
                clearErrors
            }}
        >
            {props.children}
        </CustomerContext.Provider>
    );
}

export default CustomerState;

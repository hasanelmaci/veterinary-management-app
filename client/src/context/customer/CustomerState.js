import { useReducer } from "react";
import axios from "axios";
import CustomerContext from "./customerContext";
import customerReducer from "./customerReducer";
import {
    ADD_CUSTOMER_FAIL,
    ADD_CUSTOMER_SUCCESS,
    FETCH_CUSTOMERS_FAIL,
    FETCH_CUSTOMERS_SUCCESS,
} from "./customerActions";

function CustomerState(props) {
    const initialState = {
        customer: null,
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

    return (
        <CustomerContext.Provider
            value={{
                customer: state.customer,
                loading: state.loading,
                error: state.error,
                addCustomer,
                fetchCustomers,
            }}
        >
            {props.children}
        </CustomerContext.Provider>
    );
}

export default CustomerState;

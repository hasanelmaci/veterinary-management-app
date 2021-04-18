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
    FETCH_ONE_CUSTOMER_SUCCESS,
    FETCH_ONE_CUSTOMER_FAIL
} from "./customerActions";

export default (state, action) => {
    switch (action.type) {
        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
                loading: false,
            };
        case ADD_CUSTOMER_FAIL:
            return {
                ...state,
                customer: null,
                loading: false,
                error: action.payload,
            };
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customerList: action.payload,
                loading: false,
            };
        case FETCH_ONE_CUSTOMER_SUCCESS:
            return{
                ...state,
                customer:action.payload,
                loading: 'fetched'
            };
        case FETCH_ONE_CUSTOMER_FAIL:
        case DELETE_CUSTOMER_FAIL:
        case UPDATE_CUSTOMER_FAIL:
        case FETCH_CUSTOMERS_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
                loading: false,
            };
        case DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: state.customerList.filter((customer) => customer._id !== action.payload),
                loading: false,
            };
        case CUSTOMER_CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

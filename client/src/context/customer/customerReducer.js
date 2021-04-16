import { ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAIL,CUSTOMER_CLEAR_ERRORS,FETCH_CUSTOMERS_SUCCESS,FETCH_CUSTOMERS_FAIL } from "./customerActions";

export default (state, action) => {
    switch (action.type) {
        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
                loading: false,
            };
        case ADD_CUSTOMER_FAIL:
            return{
                ...state,
                customer:null,
                loading:false,
                error:action.payload
            }
        case FETCH_CUSTOMERS_SUCCESS:
            return{
                ...state,
                customerList:action.payload,
                loading:false
            }
        default:
            return state;
    }
};

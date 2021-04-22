import {
    CUSTOMER_LOADED,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGOUT,
    CUSTOMER_CLEAR_ERRORS,
    CUSTOMER_AUTH_ERROR,
    CUSTOMER_LOGIN_FAIL,FETCH_ALL_PETS_FAIL,FETCH_ALL_PETS_SUCCESS,FETCH_ONE_PET_FAIL,FETCH_ONE_PET_SUCCESS
} from "./customerAuthActions";

export default(state,action) =>{
    switch(action.type){
        case CUSTOMER_LOADED:
            console.log('customer loadedred')
            return{
                ...state,
                isCustomerAuth:true,
                loading:false,
                customer:action.payload
            };
        case CUSTOMER_LOGIN_SUCCESS:
            localStorage.setItem("ctoken",action.payload.token)
            return{
                ...state,
                ...action.payload,
                isCustomerAuth:true,
                loading:false
            }
        case CUSTOMER_LOGIN_FAIL:
        case CUSTOMER_AUTH_ERROR:
        case CUSTOMER_LOGOUT:
            localStorage.removeItem("ctoken")
            return{
                ...state,
                isCustomerAuth:false,
                loading:false,
                customer:null,
                error:action.payload
            }
        case CUSTOMER_CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
}
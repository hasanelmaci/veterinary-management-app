import {USER_REGISTER_SUCCESS,USER_LOADED,USER_AUTH_ERROR} from './userAuthActions';

const userAuthReducer =  (state,action)=>{
    switch(action.type){
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isUserAuthanticated: true,
                user:action.payload
            }
        case USER_LOADED:
            return{
                ...state,
                isUserAuthanticated:true,
                user:action.payload
            }
        case USER_AUTH_ERROR:
            return{
                ...state,
                isUserAuthanticated:false,
            }
        default:
            return state;
    }
}

export default userAuthReducer;
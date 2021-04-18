import {
    ADD_PET_SUCCESS,
    ADD_PET_FAIL,
    FETCH_PETS_SUCCESS,
    FETCH_PETS_FAIL,
    FETCH_ONE_PET_SUCCESS,
    FETCH_ONE_PET_FAIL,
    UPDATE_PET_SUCCESS,
    UPDATE_PET_FAIL,
    DELETE_PET_SUCCESS,
    DELETE_PET_FAIL,
    PET_CLEAR_ERRORS,
} from "./petActions";

export default (state,action) => {
    switch(action.type){
        case ADD_PET_SUCCESS:
            return{
                ...state,
                pet:action.payload,
                loading:false,
            }
        case FETCH_PETS_SUCCESS:
            return{
                ...state,
                petList:action.payload,
                loading:false
            }
        case FETCH_PETS_FAIL:    
        case ADD_PET_FAIL:
            return{
                ...state,
                error:action.payload
            }
        case PET_CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}
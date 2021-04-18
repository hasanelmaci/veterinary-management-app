import { useReducer } from "react";
import axios from "axios";
import PetContext from "./petContext";
import petReducer from "./petReducer";
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

function PetState(props) {
    const initialState = {
        pet: null,
        petList: [],
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(petReducer, initialState);

    const addPet = async (id,pet) =>{
        console.log(id)
        console.log(pet)
        try{
            const res = await axios.post(`/customers/${id}/pets`,pet)
            dispatch({
                type:ADD_PET_SUCCESS,
                payload:res.data
            })
        }catch(err){
            dispatch({
                type:ADD_PET_FAIL,
                payload:err.response
            })
        }
    }

    return (
        <PetContext.Provider
            value={{
                pet: state.pet,
                petList: state.petList,
                loading: state.loading,
                error: state.error,
                addPet,
            }}
        >
            {props.children}
        </PetContext.Provider>
    );
}

export default PetState;

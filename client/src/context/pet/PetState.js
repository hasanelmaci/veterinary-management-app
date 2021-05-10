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
  ADD_UPCOMING_TREATMENT_FAIL,
  ADD_UPCOMING_TREATMENT_SUCCESS,
  ADD_PAST_TREATMENT_SUCCESS,
  ADD_PAST_TREATMENT_FAIL,
  DELETE_PAST_TREATMENT_FAIL,
  DELETE_PAST_TREATMENT_SUCCESS,
  DELETE_UPCOMING_TREATMENT_FAIL,
  DELETE_UPCOMING_TREATMENT_SUCCESS,
  CLEAR_PETLIST,
  PET_CLEAR_ERRORS,
} from "./petActions";

function PetState(props) {
  const initialState = {
    pet: null,
    petList: [],
    isDataFetched: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(petReducer, initialState);

  const addPet = async (id, pet) => {
    try {
      const res = await axios.post(`/customers/${id}/pets`, pet);
      dispatch({
        type: ADD_PET_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ADD_PET_FAIL,
        payload: err.response,
      });
    }
  };

  const fetchPets = async (id) => {
    try {
      const res = await axios.get(`/customers/${id}/pets`);
      dispatch({
        type: FETCH_PETS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_PETS_FAIL,
        payload: err.response,
      });
    }
  };

  const fetchOnePet = async (id, petid) => {
    try {
      const res = await axios.get(`/customers/${id}/${petid}`);
      dispatch({
        type: FETCH_ONE_PET_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_ONE_PET_FAIL,
        payload: err.response,
      });
    }
  };

  const updatePet = async (id, petid, pet) => {
    const allowedupdates = ["name", "type", "animal", "birthdate", "gender"];
    const picks = {};
    for (const item in pet) {
      if (pet[item] !== "" && allowedupdates.includes(item)) {
        picks[item] = pet[item];
      }
    }

    try {
      const res = await axios.patch(`/customers/${id}/${petid}`, picks);
      dispatch({
        type: UPDATE_PET_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_PET_FAIL,
        payload: err.response,
      });
    }
  };

  const addUpcomingTreatment = async (petid, formData) => {
    try {
      const res = await axios.post(`/upcomingtreatments/${petid}`, formData);
      dispatch({
        type: ADD_UPCOMING_TREATMENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ADD_UPCOMING_TREATMENT_FAIL,
        payload: err.response,
      });
    }
  };

  const addPastTreatment = async (petid, formData) => {
    try {
      const res = await axios.post(`/pasttreatments/${petid}`, formData);
      dispatch({
        type: ADD_PAST_TREATMENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ADD_PAST_TREATMENT_FAIL,
        payload: err.response,
      });
    }
  };

  const deletePastTreatment = async (petid, treatmentid) => {
    try {
      const res = await axios.delete(`/pastreatments/${petid}/${treatmentid}`);
      dispatch({
        type: DELETE_PAST_TREATMENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DELETE_PAST_TREATMENT_FAIL,
        payload: err.response,
      });
    }
  };

  const deleteUpcomingTreatment = async (petid, treatmentid) => {
    try {
      const res = await axios.delete(`/upcomingtreatments/${petid}/${treatmentid}`);
      dispatch({
        type: DELETE_UPCOMING_TREATMENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DELETE_UPCOMING_TREATMENT_FAIL,
        payload: err.response,
      });
    }
  };

  const clearPetList = () => {
    dispatch({ type: CLEAR_PETLIST });
  };

  const clearErrors = () => {
    dispatch({ type: PET_CLEAR_ERRORS });
  };

  return (
    <PetContext.Provider
      value={{
        pet: state.pet,
        petList: state.petList,
        loading: state.loading,
        error: state.error,
        addPet,
        fetchPets,
        fetchOnePet,
        updatePet,
        addUpcomingTreatment,
        addPastTreatment,
        deletePastTreatment,
        deleteUpcomingTreatment,
        clearPetList,
        clearErrors,
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
}

export default PetState;

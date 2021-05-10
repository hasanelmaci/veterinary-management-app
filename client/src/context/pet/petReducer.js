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
  ADD_UPCOMING_TREATMENT_SUCCESS,
  ADD_UPCOMING_TREATMENT_FAIL,
  ADD_PAST_TREATMENT_SUCCESS,
  ADD_PAST_TREATMENT_FAIL,
  DELETE_PAST_TREATMENT_FAIL,
  DELETE_PAST_TREATMENT_SUCCESS,
  DELETE_UPCOMING_TREATMENT_FAIL,
  DELETE_UPCOMING_TREATMENT_SUCCESS,
  CLEAR_PETLIST,
} from "./petActions";

const petReducer = (state, action) => {
  switch (action.type) {
    case ADD_PET_SUCCESS:
      return {
        ...state,
        pet: action.payload,
        loading: false,
      };
    case FETCH_PETS_SUCCESS:
      return {
        ...state,
        petList: action.payload,
        loading: false,
      };
    case FETCH_ONE_PET_SUCCESS:
      return {
        ...state,
        pet: action.payload,
        loading: action.payload._id,
      };
    case UPDATE_PET_SUCCESS:
      return {
        ...state,
        pet: action.payload,
        loading: false,
      };
    case DELETE_PET_SUCCESS:
      return {
        ...state,
        pet: state.petList.filter((pet) => pet._id !== action.payload),
        loading: false,
      };

    case ADD_PAST_TREATMENT_SUCCESS:
    case ADD_UPCOMING_TREATMENT_SUCCESS:
      return {
        ...state,
        pet: action.payload,
        loading: false,
      };
    case DELETE_UPCOMING_TREATMENT_SUCCESS:
    case DELETE_PAST_TREATMENT_SUCCESS:
      return {
        ...state,
        pet: action.payload,
        loading: false,
      };
    case DELETE_PAST_TREATMENT_FAIL:
    case DELETE_UPCOMING_TREATMENT_FAIL:
    case ADD_PAST_TREATMENT_FAIL:
    case ADD_UPCOMING_TREATMENT_FAIL:
    case DELETE_PET_FAIL:
    case UPDATE_PET_FAIL:
    case FETCH_PETS_FAIL:
    case ADD_PET_FAIL:
    case FETCH_ONE_PET_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PET_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CLEAR_PETLIST:
      return {
        ...state,
        petList: [],
      };
    default:
      return state;
  }
};
export default petReducer;

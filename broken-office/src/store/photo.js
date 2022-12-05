import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPhoto = createAction("SET_PHOTO");
export const setIncidentPhoto = createAction("SET_INCIDENTPHOTO");

const initialState = {photo: '', incidentPhoto: ''};

const reducer = createReducer(initialState, {
  [setPhoto]: (state, action) => {return {...state, photo: action.payload}},
  [setIncidentPhoto]: (state, action) => {return {...state, incidentPhoto: action.payload}}
});

export default reducer;

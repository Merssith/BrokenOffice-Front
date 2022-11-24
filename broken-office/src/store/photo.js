import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPhoto = createAction("SET_PHOTO");

const initialState = {

};

const reducer = createReducer(initialState, {
  [setPhoto]: (state, action) => action.payload,
});

export default reducer;

import { createAction, createReducer } from "@reduxjs/toolkit";

export const setModalBool = createAction("SET_MODALBOOL");

const initialState = false;

const reducer = createReducer(initialState, {
  [setModalBool]: (state, action) => action.payload,
});

export default reducer;

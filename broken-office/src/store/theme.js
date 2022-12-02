import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTheme = createAction("SET_THEME");

const initialState = false;

const reducer = createReducer(initialState, {
  [setTheme]: (state, action) => action.payload,
});

export default reducer;

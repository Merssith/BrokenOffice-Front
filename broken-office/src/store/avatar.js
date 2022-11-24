import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAvatar = createAction("SET_AVATAR");

const initialState = {
  picture: null,
};

const reducer = createReducer(initialState, {
  [setAvatar]: (state, action) => action.payload,
});

export default reducer;

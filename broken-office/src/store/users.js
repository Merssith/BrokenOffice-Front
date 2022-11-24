import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const setPlace = createAction("SET_PLACE");
export const setCoords = createAction("SET_COORDS");
export const setAvatar = createAction("SET_AVATAR");

const initialState = {
  fullname: null,
  email: null,
};

const reducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,

  // [setPlace]: (state, action) => {
  //   if (!state.email) return state;
  //   return { ...state, place: action.payload };
  // },

  // [setCoords]: (state, action) => {
  //   if (!state.email) return state;
  //   return { ...state, coords: action.payload };
  // },

  // [setAvatar]: (state, action) => {
  //   if (!state.email) return state;
  //   return { ...state, avatar: ${action.payload} };
  // },
});

export default reducer;

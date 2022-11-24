import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users";
import photoReducer from "./photo";

import avatarReducer from "./avatar";

import modalBoolReducer from "./modalBool";
const store = configureStore({
  reducer: {
    user: userReducer,
    avatar: avatarReducer,
    modalBool: modalBoolReducer,
    photo: photoReducer,
  },
});

export default store;

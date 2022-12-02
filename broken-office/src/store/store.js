import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users";
import photoReducer from "./photo";
import themeReducer from "./theme";

import avatarReducer from "./avatar";

import modalBoolReducer from "./modalBool";
const store = configureStore({
  reducer: {
    user: userReducer,
    avatar: avatarReducer,
    modalBool: modalBoolReducer,
    photo: photoReducer,
    theme: themeReducer
  },
});

export default store;

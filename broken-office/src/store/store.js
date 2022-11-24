import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users";
import photoReducer from "./photo"

const store = configureStore({
  reducer: {
    user: userReducer,
    photo: photoReducer
  },
});

export default store;

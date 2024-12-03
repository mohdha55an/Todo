import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducer/reducer";

const store = configureStore({
  reducer: todoReducer, // Pass the reducer here
});

export default store;
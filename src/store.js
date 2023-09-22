import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/todo-list/todoSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;

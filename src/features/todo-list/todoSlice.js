import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listItems: JSON.parse(localStorage.getItem("listItems")) || [],
  filterStatus: "All",
};

const todoSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.listItems.push(action.payload);
      localStorage.setItem("listItems", JSON.stringify(state.listItems));
    },
    removeItem(state, action) {
      state.listItems = state.listItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("listItems", JSON.stringify(state.listItems));
    },
    updateItem(state, action) {
      const item = state.listItems.find(
        (item) => item.id === action.payload.id
      );

      item.title = action.payload.title;
      item.status = action.payload.status;

      localStorage.setItem("listItems", JSON.stringify(state.listItems));
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem, updateFilterStatus } =
  todoSlice.actions;

export default todoSlice.reducer;

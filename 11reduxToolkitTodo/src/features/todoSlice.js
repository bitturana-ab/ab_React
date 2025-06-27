import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "AB", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    removeTodo: () => {},
  },
});

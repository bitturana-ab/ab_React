import { createSlice, nanoid } from "@reduxjs/toolkit";

// action is an object that contains the type and payload of the action
// nanoid is a function that generates a unique id for each todo item

// state is an object that contains the initial state of the slice

const initialState = {
  todos: [{ id: 1, text: "AB", completed: false }],
};

// createSlice is a function that creates a slice of the state

export const todoSlice = createSlice({
  // name shows up in the dev tools
  name: "todo",
  // The initial state is the state of the slice when the app starts
  initialState,
  // reducers are functions that take the current state and an action
  // and return a new state
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      // state is an object that contains the current state of the slice and array of todos
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export the actions so they can be used in the components
export const { addTodo, removeTodo } = todoSlice.actions;
// export the reducer so it can be used in the store
export default todoSlice.reducer;

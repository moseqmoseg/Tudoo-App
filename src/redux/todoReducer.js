import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('ADD_TODO', (state, action) => {

            state.todos.push(action.payload)
        })
        .addCase('REMOVE_TODO', (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)

        })
})

export default todoReducer;
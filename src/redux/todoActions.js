import { createAction } from "@reduxjs/toolkit";

export const addTodoAction = createAction('ADD_TODO');
export const removeTodoAction = createAction('REMOVE_TODO');
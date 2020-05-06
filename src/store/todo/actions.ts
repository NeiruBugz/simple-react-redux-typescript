import { Todo } from "../../interfaces";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';

export const addTodo = (newTodo: Todo) => ({
  type: ADD_TODO,
  payload: newTodo.description,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const checkTodo = (id: number) => ({
  type: CHECK_TODO,
  payload: id,
});

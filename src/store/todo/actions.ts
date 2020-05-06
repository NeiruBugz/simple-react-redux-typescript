import { Todo } from "../../interfaces";
import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "./types";

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

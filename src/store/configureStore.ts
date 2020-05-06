import { createStore } from 'redux';

import { todosReducer } from "./todo/reducer";

export const configureStore = (initialState: any) => {
  // @ts-ignore
  return createStore(todosReducer, initialState);
}

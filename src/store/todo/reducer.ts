import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "./actions";
import { Todo } from "../../interfaces";
import { Action } from "../../interfaces/action.common.interface";

export const todosReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length + 1,
          isDone: false,
          description: action.payload,
        },
        ...state,
      ];
    case REMOVE_TODO:
      return state.filter((t: Todo) => t.id !== action.payload);
    case CHECK_TODO:
      return state.map((t: Todo) => t.id === action.payload ? { ...t, isDone: !t.isDone } : t);
    default:
      return state;
  }
}

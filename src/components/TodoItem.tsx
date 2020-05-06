import React, { FC } from 'react';
import { Todo } from "../interfaces";

interface TodoItemProps extends Todo {
  check: (id: number) => void;
  remove: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ id, isDone, description, check, remove }) => {
  return (
    <label>
      <input type="checkbox" checked={isDone} onChange={() => check(id)} />
      {description}
      <button onClick={() => remove(id)}>x</button>
    </label>
  );
}

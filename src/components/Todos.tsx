import React, { FC, useState } from "react";

import { TodoItem } from "./TodoItem";
import { Todo } from "../interfaces";

import './Todos.css';

interface TodosProps {
  todos: Todo[];
  addTodo: (t: Todo) => void;
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
}

export const Todos: FC<TodosProps> = ({ todos, addTodo, removeTodo, checkTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setNewTodo(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      addTodo({ id: todos.length + 1, isDone: false, description: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="App">
      <input
        className="new-todo"
        placeholder="what needs to be done?"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="left">
        <h2>todo</h2>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              remove={removeTodo}
              check={checkTodo}
              {...todo}
            />
          ))}
      </div>
      <div className="right">
        <h2>done</h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              remove={removeTodo}
              check={checkTodo}
              {...todo}
            />
          ))}
      </div>
    </div>
  );
};

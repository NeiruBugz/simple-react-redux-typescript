import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { configureStore } from "./store/configureStore";
import { Provider } from "./utils/react-redux";

const todos = [
  { id: 1, isDone: false, description: 'write some docs' },
  { id: 2, isDone: false, description: 'start writing JSConf talk' },
  { id: 3, isDone: true, description: 'buy some milk' },
  { id: 4, isDone: false, description: 'mow the lawn' },
  { id: 5, isDone: false, description: 'feed the turtle' },
  { id: 6, isDone: false, description: 'fix some bugs' }
];

const store = configureStore(todos);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

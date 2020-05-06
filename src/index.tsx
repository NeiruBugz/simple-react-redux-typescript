import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

import { configureStore } from "./store/configureStore";
import { Provider } from "./utils/react-redux";

import { todos } from "./utils/mock";

import './index.css';

const store = configureStore(todos);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

let reducer = function (state, action) {
  if (action.type === "putSearchResults") {
    return { ...state, searchResults: action.res }
  }
  return state
}
let store = createStore(
  reducer,
  { searchResults: [] },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
let body = (<Provider store={store}>
  <App />
</Provider>
)

ReactDOM.render(body, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { getAllTodos } from './reducers/selectors';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.getAllTodos = getAllTodos;

  ReactDOM.render(<Root store={store} />, content);
});

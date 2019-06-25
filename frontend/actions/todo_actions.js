export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => ({ // ARRAY OF TODO OBJECTS
  type: RECEIVE_TODOS,
  todos // Implicit return because key === value
});

export const receiveTodo = todo => ({ // SINGLE TODO OBJECT
  type: RECEIVE_TODO,
  todo // Implicit return because key === value
});
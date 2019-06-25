import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
// module.exports = () => <h3>Todo List goes here!</h3>

const TodoList = ({todos, receiveTodo}) => {
  return (
    <div>
      <ul>
        { todos.map( todo => <TodoListItem todo={todo}/> )}
      </ul>
    </div>
    // <h3>Todo List should goes here!!!</h3>
  );
};


export default TodoList;

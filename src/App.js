import React, { Component, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState([
    'read road to react',
    'work out',
    'pack for trip',
  ]);

  return (
    <div className="parent">
      <h1> Todo List </h1>
      <p> I have a total of {todo.length} things to do today </p>
      <Form todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;

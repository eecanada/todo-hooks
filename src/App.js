import React, { Component, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState([
    'read road to react',
    'work out',
    'pack for trip',
  ]);

  return (
    <div>
      <Form todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;

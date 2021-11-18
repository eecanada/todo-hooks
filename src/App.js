import React, { Component, useState } from 'react';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState('Eder');
  return <Form />;
};

export default App;

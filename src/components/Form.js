import React from 'react';

const Form = ({ todo, setTodo }) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    setTodo((todo) => [...todo, event.target.elements.todo.value]);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label >
          Todo
          <input type="text" name="todo" />
        </label>
        <input  type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

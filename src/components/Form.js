import React from 'react';

const Form = ({ todo, setTodo }) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    setTodo((todo) => [...todo, event.target.elements.todo.value]);
    
  };

  return (
    <div >
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" >
          <input placeholder="task" className="submit" type="text" name="todo" />
        </label>
        <input className="submit" className="submitButton"  type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

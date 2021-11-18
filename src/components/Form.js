import React from 'react';

const Form = () => {
  let handleChange = (event) => {
    console.log(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('hit');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

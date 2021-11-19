import React from 'react';

const List = ({ todo, setTodo }) => {
  const handleClick = (item) => {
    setTodo(todo.filter((tod) => tod != item));
  };

  console.log(todo);
  return (
    <div>
      <ul>
        {todo.map((item, index) => {
          return (
            <li key={index} onClick={() => handleClick(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

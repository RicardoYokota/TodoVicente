import React from 'react';

const Todo = ({ name, onRemove, onChecked, checked }) => {
  return (
    <div className={`todoItem ${checked ? 'finished' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChecked(e.target.checked)}
      />
      <span className={checked ? 'text2' : 'text'}>{name}</span>
      <button onClick={onRemove}>
        <img src="/assets/trash.png" alt="Remove" />
      </button>
    </div>
  );
};

export default Todo;

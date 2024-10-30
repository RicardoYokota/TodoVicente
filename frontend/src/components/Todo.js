import React from 'react';
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import '../styles.css';

const Todo = ({ name, onRemove, onChecked, checked }) => {
  return (
    <div className={`todoItem ${checked ? 'finished' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChecked(e.target.checked)}
      />
      <span className={checked ? 'text2' : 'text'}>{name}</span>
      <button onClick={onRemove} className="removeButton">
        <MdOutlineRemoveCircleOutline size={20} />
      </button>
    </div>
  );
};

export default Todo;

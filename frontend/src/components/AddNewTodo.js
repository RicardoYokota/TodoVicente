import React, { useState } from 'react';

const AddNewTodo = ({ onAdd }) => {
    const [newTask, setNewTask] = useState('');

    const handleAdd = () => {
        if (newTask.trim()) {
            onAdd(newTask);
            setNewTask('');
        }
    };

    return (
        <div className="addNewTodo">
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAdd}>+</button>
        </div>
    );
};

export default AddNewTodo;

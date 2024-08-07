import React, { useState, useEffect } from 'react';
import AddNewTodo from './components/AddNewTodo';
import Todo from './components/Todo';
import Counter from './components/Counter';
import { getTodosFromDB, saveTodosToDB, updateTodoInDB, deleteTodoFromDB } from './utils/localStorage';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromDB = await getTodosFromDB();
      setTodos(todosFromDB);
    };
    fetchTodos();
  }, []);

  const handleTodoAdd = async (name) => {
    const taskWithSameName = todos.find((task) => task.name === name);
    if (taskWithSameName) {
      alert('Tarefa já existe', 'Já existe uma tarefa dessa criada');
      return;
    }
    const newTodo = { name, checked: false };
    setTodos((prevState) => [...prevState, newTodo]);
    await saveTodosToDB(newTodo);
  };

  const handleTodoCheck = async (name, checked) => {
    setTodos((prevState) =>
      prevState.map((item) => (item.name === name ? { ...item, checked } : item))
    );
    const todo = todos.find((task) => task.name === name);
    if (todo) {
      await updateTodoInDB(todo.id, checked);
    }
  };

  const handleTodoRemove = async (name) => {
    setTodos((prevState) => prevState.filter((item) => item.name !== name));
    const todo = todos.find((task) => task.name === name);
    if (todo) {
      await deleteTodoFromDB(todo.id);
    }
  };

  const createdTasksCount = todos.length;
  const completedTasksCount = todos.filter((task) => task.checked).length;

  return (
    <div className="app">
      <div className="header">
        {/*    <img src="/assets/logo.png" alt="Logo" /> */}
      </div>
      <div className="body">
        <AddNewTodo onAdd={handleTodoAdd} />
        <div className="counters">
          <Counter name="Criadas" value={createdTasksCount} />
          <Counter name="Concluídas" value={completedTasksCount} />
        </div>
        <div className="todoList">
          {todos.map((todo) => (
            <Todo
              key={todo.name}
              name={todo.name}
              checked={todo.checked}
              onRemove={() => handleTodoRemove(todo.name)}
              onChecked={(checked) => handleTodoCheck(todo.name, checked)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

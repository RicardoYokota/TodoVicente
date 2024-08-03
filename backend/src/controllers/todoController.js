const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addTodo = async (req, res) => {
    try {
        const { name } = req.body;
        const newTodo = await Todo.create({ name });
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { checked } = req.body;
        const todo = await Todo.findByPk(id);
        if (todo) {
            todo.checked = checked;
            await todo.save();
            res.json(todo);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todo.destroy({ where: { id } });
        if (result) {
            res.json({ message: 'Todo deleted' });
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

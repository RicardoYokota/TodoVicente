import axios from 'axios';

const API_URL = 'http://192.168.1.17:5000/api/todos';


export const getTodosFromDB = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (err) {
        console.error('Error fetching todos', err);
        return [];
    }
};

export const saveTodosToDB = async (todo) => {
    try {
        await axios.post(API_URL, todo);
    } catch (err) {
        console.error('Error saving todo', err);
    }
};

export const updateTodoInDB = async (id, checked) => {
    try {
        await axios.put(`${API_URL}/${id}`, { checked });
    } catch (err) {
        console.error('Error updating todo', err);
    }
};

export const deleteTodoFromDB = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
        console.error('Error deleting todo', err);
    }
};

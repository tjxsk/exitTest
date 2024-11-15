import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddForm.css'

const AddForm = () => {
    const navigate = useNavigate();
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: '',
        completed: false
    });

    let handleAdd = () => {
        try {
            axios.post('http://localhost:3000/todo/add', newTodo);
            navigate('/')
            window.location.reload();
        } catch (error) {
            console.error('Error adding todo list:', error);
            alert('Failed to add to-do list.');
        }
    };

    let fetchValue = (e) => {
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h2>Add new to-do list</h2>
            <div className='add-wrapper'>
                <form className='add-form'>
                    <div className="mb-3">
                        <label className="form-label">Todo Title</label>:
                        <input type="text" className="form-control" id="title" name='title' onChange={fetchValue} value={newTodo.title}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={fetchValue} value={newTodo.description}/>
                    </div>
                    <button type="submit" className="btn btn-secondary" onClick={handleAdd}>Add Task</button>
                </form>
            </div>
        </>
    )
}

export default AddForm
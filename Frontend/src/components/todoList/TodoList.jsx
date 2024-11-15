import React, { useEffect, useState } from 'react'
import './TodoList.css'
import axios from 'axios';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { createSvgIcon } from '@mui/material/utils';
import { useNavigate } from 'react-router-dom';


const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [checkData,setCheckData] = useState({
        completed: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/todo').then((res) => {
            setTodo(res.data);
        })
    }, [])

    const handeleDelete = (id) => {
        axios.delete('http://localhost:3000/todo/delete/' + id)
            .then(() => {
                window.location.reload();
            })
    }
    const handleadd = () => {
        navigate('/add')
    }

    const PlusIcon = createSvgIcon(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
    );


    return (
        <>
            <div className='main-wrapper'>
                <h2>TodoList</h2>
                <div className='todo-list'>
                    <ol className="list-group list-group-numbered">
                        {todo.map((data) => (
                            <li className="list-group-item ">
                                <label className="form-check-label" for="firstCheckbox">{data.title}</label>
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                <p className='description'>Description:</p>
                                <p>{data.description}</p>
                                <IconButton
                                    aria-label="delete" 
                                    size="small"
                                    onClick={() => handeleDelete(data._id)}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </li>
                        ))}
                        <IconButton
                            className='btn-add'
                            aria-label="add"
                            size="small"
                            onClick={handleadd}
                        >
                            <PlusIcon fontSize="small" />
                            Add new task
                        </IconButton>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList
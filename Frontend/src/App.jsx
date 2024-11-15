import React from 'react';
import './App.css'
import TodoList from './components/todoList/TodoList';
import { Route, Routes } from 'react-router-dom';
import AddForm from './components/AddForm/AddForm';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TodoList/>} />
        <Route path='/add' element={<AddForm/>} />
      </Routes>
    </>
  )
}

export default App


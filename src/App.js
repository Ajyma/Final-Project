import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </>
  );
}

export default App;
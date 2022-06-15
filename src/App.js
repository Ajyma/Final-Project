import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';
import { MorePage } from './pages/Main/More';

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<PrivateRoutes/>}> */}
          <Route path='/' element={<Main/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
        {/* </Route> */}
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/more:id' element={<MorePage/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
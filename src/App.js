import React from 'react';
import './App.css';
import LayoutRoutes from './pages/LayoutPages'
import AuthRoutes from './pages/AuthPages'
import Loader from "./components/Loader";
import { useAuth } from "./providers/useAuth";

export function App() {
  const { users , loading} = useAuth()
  console.log(users);

  if (loading) return <Loader/>

  return users ? <LayoutRoutes/> : <AuthRoutes/>
}

export default App;


// import { Routes, Route, Navigate } from 'react-router-dom'
// import Main from './pages/Main';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Basket from './pages/Basket';
// import Favorites from './pages/Favorites';

 // return (
  //   <>
  //     <Routes>
  //       <Route path='/' element={<Main/>}/>
  //       <Route path='*' element={<Navigate to="/"/>}/>
  //       <Route path='/auth/register' element={<Register/>}/>
  //       <Route path='/auth/login' element={<Login/>}/>
  //       <Route path='/basket' element={<Basket/>}/>
  //       <Route path='/favorites' element={<Favorites/>}/>
  //     </Routes>
  //   </>
  // );
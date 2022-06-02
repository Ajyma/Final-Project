import React from 'react';
import './App.css';
import Header from './components/Header';
import { Layout } from './pages/Layout';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Layout/>
      
    </React.Fragment>
  );
}

export default App;
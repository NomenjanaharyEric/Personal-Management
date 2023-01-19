import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Departments from './components/Departments';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>

        <Route path='/departments' element={<Departments/>}></Route>
      </Routes>
    </AppLayout>

  )
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<SignUp />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
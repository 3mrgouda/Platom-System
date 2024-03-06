import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Controller from './components/Controller';



function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/controller/*' element={<Controller/>}/>
    <Route path='/' element={<><Navbar/><Hero/></>}/>
      </Routes>
   </BrowserRouter>
  </>
  )
}

export default App

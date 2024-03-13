import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Controller from './components/Controller';
import Aos from 'aos';
import 'aos/dist/aos.css'



function App() {
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    Aos.refresh();
   },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/controller/*' element={<Controller />} />
          <Route path='/' element={<><Navbar /><Hero /></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

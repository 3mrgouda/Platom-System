import React from 'react';
import Memebers from './crud.jsx/Memebers';
import { Route, Routes } from 'react-router-dom';
import Teams from './crud.jsx/Teams';
import Events from './crud.jsx/Events';

const Main = () => {
return(
  <>
  <Routes>
    <Route path='members' element={<Memebers/>}/>
    <Route path='teams' element={<Teams/>}/>
    <Route path='events' element={<Events/>}/>
  </Routes>
</>
)

}

export default Main
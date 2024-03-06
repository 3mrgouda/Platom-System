import React from 'react';
import {FaAngleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='border-r-2 border-black h-[80vh]'>
       <div className=' px-10 flex flex-col text-3xl gap-14'>
        <button className='flex  items-center' ><Link to='members'>Members</Link> <FaAngleRight className='text-2xl' /></button>
        <button className='flex   items-center'id='teamBtn'><Link to='teams'>Teams</Link> <FaAngleRight className='text-2xl' /></button>
        <button className='flex   items-center'id='eventBtn'><Link to='events'>Events</Link> <FaAngleRight className='text-2xl' /></button>
    </div>  
    </div>
   
  )
}

export default Sidebar
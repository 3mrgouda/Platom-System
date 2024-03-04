import React from 'react';
import {FaAngleRight} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='border-r-2 border-black h-[80vh]'>
       <div className=' px-10 flex flex-col text-3xl gap-14'>
        <button className='flex items-center'>members <FaAngleRight className='' /></button>
        <button className='flex items-center'>members <FaAngleRight className='' /></button>
        <button className='flex items-center'>members <FaAngleRight className='' /></button>
    </div>  
    </div>
   
  )
}

export default Sidebar
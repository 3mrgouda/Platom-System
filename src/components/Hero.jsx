import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='my-32   '>
        <div className="container lg:w-[80%] mx-auto lg:my-4 flex flex-col items-center gap-20 min-h-[60vh] border-solid border-black border-b-4 rounded-md">
         
           <h1 className='text-center lg:text-8xl uppercase font-extrabold '>Manage your System <br /> fast and easy</h1>
           <p className='text-black/60 tracking-widest'><span className='text-purple-600 font-extrabold text-xl'>Platom</span> is a free system management to can manage your events by the professional way</p>
           <Link to={'./Controller/members'} className='flex items-center gap-4 xl:mb-12 text-3xl capitalize font-mono border-solid border-black border-4 rounded-md py-3 px-4 hover:scale-105 duration-200'>get started <FaArrowRightLong/> </Link>
       
       
       
        </div>     <div className="capitalize flex gap-60 justify-center text-4xl font-bold">
          <h3>members : </h3>
          <h3>teams : </h3>
          <h3>events : </h3>
         </div>
    </div>
    
  )
}

export default Hero
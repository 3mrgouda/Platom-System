import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Aos from 'aos';


const Hero = () => {
 
  return (
    <div className='lg:my-20 2xl:my-32   '>
      <div className="container lg:w-[80%] mx-auto lg:my-4 flex flex-col items-center lg:gap-10 2xl:gap-20 min-h-[60vh] border-solid border-black border-b-4 max-xl:rounded-none 2xl:rounded-full">

        <h1 className='text-center xl:text-7xl  2xl:text-8xl uppercase font-extrabold ' data-aos='zoom-out'>Manage your System <br /> fast and easy</h1>
        <p className='text-black/60 tracking-widest'data-aos='fade-up'><span className='text-purple-600 font-extrabold text-xl' >Platom</span> is a free system management to can manage your events by the professional way</p>
        <Link to={'./Controller/members'} data-aos='zoom-in' className='flex items-center gap-4  text-3xl capitalize font-mono border-solid border-black border-4 rounded-md py-3 px-4 hover:scale-105 duration-200'>get started <FaArrowRightLong /> </Link>



      </div>     
      <div data-aos='flip-down' className="capitalize flex xl:gap-20 2xl:gap-60 justify-center items-center text-4xl font-bold">
        <h3 className='cursor-pointer hover:'>members  </h3>
        <FaArrowRightLong />
        <h3 className='cursor-pointer hover:'>teams </h3>
        <FaArrowRightLong />
        <h3 className='cursor-pointer hover:'>events  </h3>
      </div>
    </div>

  )
}

export default Hero
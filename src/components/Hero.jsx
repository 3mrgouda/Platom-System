import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aos from "aos";

const Hero = () => {
  return (
    <div className="my-10">
      <div className="container lg:w-[80%] mx-auto lg:my-4 flex flex-col items-center gap-4 lg:gap-10 2xl:gap-20 min-h-[60vh] border-solid border-black border-b-4 max-xl:rounded-none 2xl:rounded-full p-4">
        <h1
          className="text-center text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl uppercase font-extrabold"
          data-aos="zoom-out"
        >
          Manage your System <br /> fast and easy
        </h1>
        <p
          className="text-black/60 tracking-widest mt-4 md:mt-6"
          data-aos="fade-up"
        >
          <span className="text-purple-600 font-extrabold text-xl">Platom</span>
          is a free system management tool to manage your events professionally.
        </p>
        <Link
          to="/main"
          data-aos="zoom-in"
          className="flex items-center gap-4 text-xl md:text-2xl lg:text-3xl capitalize font-mono border-solid border-black border-4 rounded-md py-3 px-4 mt-6 hover:scale-105 duration-200"
        >
          Get started <FaArrowRightLong />
        </Link>
      </div>
      <div
        data-aos="flip-down"
        className="capitalize flex gap-4 md:gap-10 lg:gap-20 2xl:gap-60 justify-center items-center text-xl md:text-2xl lg:text-4xl font-bold mt-10"
      >
        <h3 className="cursor-pointer hover:text-purple-500 duration-200">
          Members
        </h3>
        <FaArrowRightLong />
        <h3 className="cursor-pointer hover:text-purple-500 duration-200">
          Teams
        </h3>
        <FaArrowRightLong />
        <h3 className="cursor-pointer hover:text-purple-500 duration-200">
          Events
        </h3>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ControlNav = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-around my-5 mx-auto space-y-4 md:space-y-0 md:space-x-4">
      <Link
        to="/controller"
        className="text-center border-solid rounded-md border-4 border-purple-500 uppercase font-mono text-xl sm:text-2xl md:text-3xl font-extrabold py-2 sm:py-3 px-4 cursor-pointer"
      >
        PLATOM System
      </Link>
      <Link
        to="../"
        className="flex items-center gap-2 sm:gap-4 text-xl sm:text-2xl md:text-3xl capitalize font-mono border-solid border-black border-4 rounded-md py-2 sm:py-3 px-4 hover:scale-105 duration-200"
      >
        <FaArrowLeftLong />
        Return To Home
      </Link>
    </div>
  );
};

export default ControlNav;

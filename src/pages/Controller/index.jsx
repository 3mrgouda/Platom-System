import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Controller() {
  return (
    <div className="flex justify-center -mr-8 lg:-mr-0 lg:top-0  lg:absolute lg:h-screen">
      <div className="side-bar lg:border-r-2 h-4/5 my-auto">
        <p className="lg:hidden text-xl">Link between Pages</p>
        <div className="lg:px-10 flex flex-row lg:flex-col text-xl md:text-2xl lg:text-3xl gap-6 md:gap-10 lg:gap-14">
          <button className="flex items-center" id="eventBtn">
            <Link to="/events" className="flex items-center">
              Events{" "}
              <FaAngleRight className="text-xl md:text-2xl lg:text-3xl ml-2" />
            </Link>
          </button>
          <button className="flex items-center" id="teamBtn">
            <Link to="/teams" className="flex items-center">
              Teams{" "}
              <FaAngleRight className="text-xl md:text-2xl lg:text-3xl ml-2" />
            </Link>
          </button>
          <button className="flex items-center">
            <Link to="/members" className="flex items-center">
              Members{" "}
              <FaAngleRight className="text-xl md:text-2xl lg:text-3xl ml-2" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link, Route, Routes } from "react-router-dom";
import Members from "./controllSections/Members";
import Teams from "./controllSections/Teams";
import Events from "./controllSections/Events";
import HomeControll from "./controllSections/HomeControll";

export default function Control() {
  return (
    <div className="flex h-[100vh] gap-2">
      <div className="side-bar border-r-2 h-[80vh] my-auto">
        <div className=" px-10 flex flex-col text-3xl gap-14">
          <button className="flex  items-center">
            <Link to="./">Main</Link>{" "}
            <FaAngleRight className="text-2xl" />
          </button>
          <button className="flex  items-center">
            <Link to="members">Members</Link>{" "}
            <FaAngleRight className="text-2xl" />
          </button>
          <button className="flex   items-center" id="teamBtn">
            <Link to="teams">Teams</Link>
            <FaAngleRight className="text-2xl" />
          </button>
          <button className="flex   items-center" id="eventBtn">
            <Link to="events">Events</Link>{" "}
            <FaAngleRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="main-content h-[80vh] my-auto w-[80%]">
        <Routes>
          <Route path="/" element={<HomeControll/>} />
          <Route path="members" element={<Members/>} />
          <Route path="teams" element={<Teams/>} />
          <Route path="events" element={<Events/>} />
        </Routes>
      </div>
    </div>
  );
}

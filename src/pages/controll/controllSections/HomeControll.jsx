import React, { useEffect, useState } from "react";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeControll() {
  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  //get data from local storage for events
  useEffect(() => {
    const storedevents = localStorage.getItem("events");
    if (storedevents) {
      setEvents(JSON.parse(storedevents));
    }
    const storedteams = localStorage.getItem("teams");
    if (storedteams) {
      setTeams(JSON.parse(storedteams));
    }

    const storedmembers = localStorage.getItem("members");
    if (storedmembers) {
      setMembers(JSON.parse(storedmembers));
    }
  }, []);
  return (
    <div className="w-[80%] mx-auto">
      <form className="flex w-[80%] mx-auto my-4 justify-between">
        <fieldset className="events">
          <select className="cursor-pointer outline-1 outline-purple-500 border-purple-500 border-2 rounded-sm border-solid">
            <option disabled selected>
              Choose The Event
            </option>
            {events.map((event) => (
              <option value={event.memName}>{event.memName}</option>
            ))}
          </select>
        </fieldset>

        <fieldset className="first-team">
          <select className="cursor-pointer outline-1 outline-purple-500 border-purple-500 border-2 rounded-sm border-solid">
            <option disabled selected>
              Choose The Team
            </option>
           {
             teams.map((team) => (
               <option value={team.memName}>{team.memName}</option>
             ))
           }
          </select>
        </fieldset>

        <fieldset className="second-team">
          <select className="cursor-pointer outline-1 outline-purple-500 border-purple-500 border-2 rounded-sm border-solid">
            <option disabled selected>
              Choose The Member
            </option>
           {
            members.map((member) => (
              <option value={member.memName}>{member.memName}</option>
            ))
           }
          </select>
        </fieldset>
        <input
          className="bg-purple-500 py-1 px-5 cursor-pointer rounded-sm hover:rounded-lg duration-100"
          type="submit"
          value="Submit"
        />
      </form>

      <table className="w-[80%] mx-auto my-4 text-left">
        <thead className="border ">
          <tr className="lg:text-2xl capitalize">
            <th>ID</th>
            <th>Event</th>
            <th>Team</th>
            <th>Member</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500 hover:text-black hover:scale-105 duration-150">
            {

            }
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Main() {
  // Fetching data from localStorage or initializing empty arrays if not available
  const getMembersFromStorage = localStorage.getItem("members");
  const getTeamsFromStorage = localStorage.getItem("teams");

  const [members, setMembers] = useState(
    getMembersFromStorage ? JSON.parse(getMembersFromStorage) : []
  );
  const [teams, setTeams] = useState(
    getTeamsFromStorage ? JSON.parse(getTeamsFromStorage) : []
  );

  // State to track open/closed state of each team dropdown
  const [dropdownOpenTeams, setDropdownOpenTeams] = useState({});

  // Function to toggle dropdown for a specific team
  const toggleTeamDropdown = (teamId) => {
    setDropdownOpenTeams((prevState) => ({
      ...prevState,
      [teamId]: !prevState[teamId],
    }));
  };

  // Initialize dropdown state based on teams data
  useEffect(() => {
    const initialDropdownState = {};
    teams.forEach((team) => {
      initialDropdownState[team.id] = false; // Assuming all dropdowns start closed
    });
    setDropdownOpenTeams(initialDropdownState);
  }, [teams]);

  return (
    <div className="w-full">
      <div className="w-full container mx-auto">
        <div className="w-[80%] mx-auto my-4 text-left">
          <div className="logo mb-16">
            <Link
              className="border-solid rounded-md border-purple-500 border-4 py-1 px-4 text-xl font-bold"
              to="/"
            >
              Platom System
            </Link>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold">Total Members</h2>
              <p className="text-xl">{members.length}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Total Teams</h2>
              <p className="text-xl">{teams.length}</p>
            </div>
          </div>

          <table className="w-full my-4 text-left">
            <thead>
              <tr className="lg:text-2xl capitalize border-b-2">
                <th>ID</th>
                <th>Team Name</th>
                <th>Number Of Members</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, i) => (
                <tr
                  key={team.id}
                  className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500 hover:text-black hover:scale-105 duration-150"
                >
                  <td>{i + 1}</td>
                  <td>{team.teamName}</td>
                  <td>{team.numberOfMembers}</td>
                  <td>
                    <div className="inline-block font-semibold text-xl">
                      <div
                        className="flex items-center group gap-[2px] py-2 cursor-pointer"
                        onClick={() => toggleTeamDropdown(team.id)}
                      >
                        <span>
                          <FaCaretDown
                            className={`duration-300 ${
                              dropdownOpenTeams[team.id] ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                        Members
                      </div>
                      <div
                        className={`${
                          dropdownOpenTeams[team.id]
                            ? "block absolute z-50"
                            : "hidden"
                        }`}
                      >
                        <ul className="bg-white p-3 shadow-md hover:shadow-purple-500">
                          {team.teamMembers.map((member, index) => (
                            <li
                              key={index}
                              className="cursor-pointer p-2 font-semibold text-xl hover:bg-purple-100"
                            >
                              {`${member.firstName} ${member.lastName}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

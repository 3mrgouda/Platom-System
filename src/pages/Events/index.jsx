import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Controller from "../Controller";

export default function Events() {
  // Fetching data from localStorage or initializing empty arrays if not available
  const getMembersFromStorage = localStorage.getItem("members");
  const getTeamsFromStorage = localStorage.getItem("teams");
  const getMatchupsFromStorage = localStorage.getItem("matchups");

  const [members, setMembers] = useState(
    getMembersFromStorage ? JSON.parse(getMembersFromStorage) : []
  );
  const [teams, setTeams] = useState(
    getTeamsFromStorage ? JSON.parse(getTeamsFromStorage) : []
  );
  const [matchups, setMatchups] = useState([
    {
      team1: {
        id: 2,
        teamName: "Quadrous",
        teamMembers: [
          {
            id: 18,
            firstName: "Benjamin",
            lastName: "Hall",
            gender: "Male",
            age: 41,
          },
          {
            id: 19,
            firstName: "Ava",
            lastName: "Young",
            gender: "Female",
            age: 32,
          },
          {
            id: 20,
            firstName: "Ethan",
            lastName: "Allen",
            gender: "Male",
            age: 35,
          },
          {
            id: 21,
            firstName: "Grace",
            lastName: "King",
            gender: "Female",
            age: 28,
          },
          {
            id: 22,
            firstName: "Alexander",
            lastName: "Wright",
            gender: "Male",
            age: 42,
          },
          {
            id: 23,
            firstName: "Sofia",
            lastName: "Scott",
            gender: "Female",
            age: 27,
          },
        ],
        numberOfMembers: 6,
      },
      team2: {
        id: 0,
        teamName: "Flibbers",
        teamMembers: [
          {
            id: 0,
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            age: 28,
          },
          {
            id: 1,
            firstName: "Alice",
            lastName: "Smith",
            gender: "Female",
            age: 34,
          },
          {
            id: 2,
            firstName: "Michael",
            lastName: "Brown",
            gender: "Male",
            age: 45,
          },
          {
            id: 3,
            firstName: "Emma",
            lastName: "Davis",
            gender: "Female",
            age: 22,
          },
          {
            id: 4,
            firstName: "Robert",
            lastName: "Wilson",
            gender: "Male",
            age: 50,
          },
          {
            id: 5,
            firstName: "Hannah",
            lastName: "Moore",
            gender: "Female",
            age: 30,
          },
          {
            id: 6,
            firstName: "David",
            lastName: "Taylor",
            gender: "Male",
            age: 40,
          },
          {
            id: 7,
            firstName: "Sarah",
            lastName: "Anderson",
            gender: "Female",
            age: 27,
          },
        ],
        numberOfMembers: 8,
      },
      name: "Sader",
      team1Score: "250",
      team2Score: "175",
    },
    {
      team1: {
        id: 3,
        teamName: "Marous",
        teamMembers: [
          {
            id: 24,
            firstName: "Nathan",
            lastName: "Green",
            gender: "Male",
            age: 38,
          },
          {
            id: 25,
            firstName: "Aiden",
            lastName: "Adams",
            gender: "Male",
            age: 33,
          },
          {
            id: 26,
            firstName: "Isabella",
            lastName: "Baker",
            gender: "Female",
            age: 26,
          },
          {
            id: 27,
            firstName: "Caleb",
            lastName: "Nelson",
            gender: "Male",
            age: 47,
          },
          {
            id: 28,
            firstName: "Megan",
            lastName: "Carter",
            gender: "Female",
            age: 32,
          },
          {
            id: 29,
            firstName: "Liam",
            lastName: "Mitchell",
            gender: "Male",
            age: 36,
          },
          {
            id: 30,
            firstName: "Avery",
            lastName: "Perez",
            gender: "Female",
            age: 24,
          },
        ],
        numberOfMembers: 7,
      },
      team2: {
        id: 1,
        teamName: "sotra",
        teamMembers: [
          {
            id: 8,
            firstName: "Kevin",
            lastName: "Thomas",
            gender: "Male",
            age: 37,
          },
          {
            id: 9,
            firstName: "Olivia",
            lastName: "Martin",
            gender: "Female",
            age: 25,
          },
          {
            id: 10,
            firstName: "Daniel",
            lastName: "Lopez",
            gender: "Male",
            age: 33,
          },
          {
            id: 11,
            firstName: "Sophia",
            lastName: "Gonzalez",
            gender: "Female",
            age: 29,
          },
          {
            id: 12,
            firstName: "James",
            lastName: "Rodriguez",
            gender: "Male",
            age: 36,
          },
          {
            id: 13,
            firstName: "Emily",
            lastName: "Martinez",
            gender: "Female",
            age: 31,
          },
          {
            id: 14,
            firstName: "Matthew",
            lastName: "Hernandez",
            gender: "Male",
            age: 44,
          },
          {
            id: 15,
            firstName: "Chloe",
            lastName: "Clark",
            gender: "Female",
            age: 23,
          },
          {
            id: 16,
            firstName: "Joshua",
            lastName: "Lee",
            gender: "Male",
            age: 39,
          },
          {
            id: 17,
            firstName: "Mia",
            lastName: "Walker",
            gender: "Female",
            age: 26,
          },
        ],
        numberOfMembers: 10,
      },
      name: "Kuee",
      team1Score: "195",
      team2Score: "180",
    },
    {
      team1: {
        id: 1,
        teamName: "sotra",
        teamMembers: [
          {
            id: 8,
            firstName: "Kevin",
            lastName: "Thomas",
            gender: "Male",
            age: 37,
          },
          {
            id: 9,
            firstName: "Olivia",
            lastName: "Martin",
            gender: "Female",
            age: 25,
          },
          {
            id: 10,
            firstName: "Daniel",
            lastName: "Lopez",
            gender: "Male",
            age: 33,
          },
          {
            id: 11,
            firstName: "Sophia",
            lastName: "Gonzalez",
            gender: "Female",
            age: 29,
          },
          {
            id: 12,
            firstName: "James",
            lastName: "Rodriguez",
            gender: "Male",
            age: 36,
          },
          {
            id: 13,
            firstName: "Emily",
            lastName: "Martinez",
            gender: "Female",
            age: 31,
          },
          {
            id: 14,
            firstName: "Matthew",
            lastName: "Hernandez",
            gender: "Male",
            age: 44,
          },
          {
            id: 15,
            firstName: "Chloe",
            lastName: "Clark",
            gender: "Female",
            age: 23,
          },
          {
            id: 16,
            firstName: "Joshua",
            lastName: "Lee",
            gender: "Male",
            age: 39,
          },
          {
            id: 17,
            firstName: "Mia",
            lastName: "Walker",
            gender: "Female",
            age: 26,
          },
        ],
        numberOfMembers: 10,
      },
      team2: {
        id: 3,
        teamName: "Marous",
        teamMembers: [
          {
            id: 24,
            firstName: "Nathan",
            lastName: "Green",
            gender: "Male",
            age: 38,
          },
          {
            id: 25,
            firstName: "Aiden",
            lastName: "Adams",
            gender: "Male",
            age: 33,
          },
          {
            id: 26,
            firstName: "Isabella",
            lastName: "Baker",
            gender: "Female",
            age: 26,
          },
          {
            id: 27,
            firstName: "Caleb",
            lastName: "Nelson",
            gender: "Male",
            age: 47,
          },
          {
            id: 28,
            firstName: "Megan",
            lastName: "Carter",
            gender: "Female",
            age: 32,
          },
          {
            id: 29,
            firstName: "Liam",
            lastName: "Mitchell",
            gender: "Male",
            age: 36,
          },
          {
            id: 30,
            firstName: "Avery",
            lastName: "Perez",
            gender: "Female",
            age: 24,
          },
        ],
        numberOfMembers: 7,
      },
      name: "Suador",
      team1Score: "150",
      team2Score: "190",
    },
  ]);

  const [selectedTeam1, setSelectedTeam1] = useState(null);
  const [selectedTeam2, setSelectedTeam2] = useState(null);
  const [matchupName, setMatchupName] = useState("");
  const [team1Score, setTeam1Score] = useState("");
  const [team2Score, setTeam2Score] = useState("");

  const [dropdownOpenTeams, setDropdownOpenTeams] = useState({});

  const toggleTeamDropdown = (teamId) => {
    setDropdownOpenTeams((prevState) => ({
      ...prevState,
      [teamId]: !prevState[teamId],
    }));
  };

  const selectTeam = (team, setTeam) => {
    setTeam(team);
    setDropdownOpenTeams({});
  };

  const addMatchup = () => {
    if (
      selectedTeam1 &&
      selectedTeam2 &&
      matchupName &&
      team1Score !== "" &&
      team2Score !== ""
    ) {
      const newMatchup = {
        team1: selectedTeam1,
        team2: selectedTeam2,
        name: matchupName,
        team1Score,
        team2Score,
      };
      const updatedMatchups = [...matchups, newMatchup];
      setMatchups(updatedMatchups);
      localStorage.setItem("matchups", JSON.stringify(updatedMatchups));

      setSelectedTeam1(null);
      setSelectedTeam2(null);
      setMatchupName("");
      setTeam1Score("");
      setTeam2Score("");
    }
  };

  const deleteMatchup = (index) => {
    if (window.confirm("Are you sure you want to delete this match-up?")) {
      const updatedMatchups = matchups.filter((_, i) => i !== index);
      setMatchups(updatedMatchups);
      localStorage.setItem("matchups", JSON.stringify(updatedMatchups));
    }
  };

  useEffect(() => {
    const initialDropdownState = {};
    teams.forEach((team) => {
      initialDropdownState[team.id] = false;
    });
    setDropdownOpenTeams(initialDropdownState);
  }, [teams]);

  return (
    <div className="w-full">
      <div className="w-full container mx-auto">
        <div className="w-[80%] mx-auto my-4 text-left">
          <div className="my-4">
            <h2 className="text-2xl font-semibold mb-4">Create Match-Up</h2>
            <input
              type="text"
              value={matchupName}
              onChange={(e) => setMatchupName(e.target.value)}
              placeholder="Match-Up Name"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative inline-block w-full lg:w-[48%] mb-4 lg:mb-0">
                <button
                  onClick={() => toggleTeamDropdown("team1")}
                  className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-full flex justify-between items-center"
                >
                  {selectedTeam1 ? selectedTeam1.teamName : "Select Team 1"}
                  <FaCaretDown
                    className={`duration-300 ${
                      dropdownOpenTeams["team1"] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`${
                    dropdownOpenTeams["team1"]
                      ? "block absolute z-50"
                      : "hidden"
                  } w-full`}
                >
                  <ul className="bg-white p-3 shadow-md">
                    {teams.map((team) => (
                      <li
                        key={team.id}
                        onClick={() => selectTeam(team, setSelectedTeam1)}
                        className={`cursor-pointer p-2 font-semibold text-xl hover:bg-purple-100 ${
                          selectedTeam2 && selectedTeam2.id === team.id
                            ? "hidden"
                            : ""
                        }`}
                      >
                        {team.teamName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative inline-block w-full lg:w-[48%] mb-4 lg:mb-0">
                <button
                  onClick={() => toggleTeamDropdown("team2")}
                  className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-full flex justify-between items-center"
                  disabled={!selectedTeam1}
                >
                  {selectedTeam2 ? selectedTeam2.teamName : "Select Team 2"}
                  <FaCaretDown
                    className={`duration-300 ${
                      dropdownOpenTeams["team2"] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`${
                    dropdownOpenTeams["team2"]
                      ? "block absolute z-50"
                      : "hidden"
                  } w-full`}
                >
                  <ul className="bg-white p-3 shadow-md">
                    {teams
                      .filter(
                        (team) => !selectedTeam1 || team.id !== selectedTeam1.id
                      )
                      .map((team) => (
                        <li
                          key={team.id}
                          onClick={() => selectTeam(team, setSelectedTeam2)}
                          className="cursor-pointer p-2 font-semibold text-xl hover:bg-purple-100"
                        >
                          {team.teamName}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-4">
              <input
                type="number"
                value={team1Score}
                onChange={(e) => setTeam1Score(e.target.value)}
                placeholder="Team 1 Score"
                className="w-full lg:w-[48%] mb-4 lg:mb-0 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                value={team2Score}
                onChange={(e) => setTeam2Score(e.target.value)}
                placeholder="Team 2 Score"
                className="w-full lg:w-[48%] mb-4 lg:mb-0 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={addMatchup}
              className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md"
              disabled={
                !selectedTeam1 ||
                !selectedTeam2 ||
                !matchupName ||
                team1Score === "" ||
                team2Score === ""
              }
            >
              Add Match-Up
            </button>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Match-Ups</h3>
              <table className="w-full my-4 text-left">
                <thead>
                  <tr className="lg:text-2xl text-sm text-nowrap capitalize border-b-2">
                    <th className="pr-2">Name</th>
                    <th className="pr-2">Team 1</th>
                    <th className="pr-2">Team 2</th>
                    <th className="pr-2">Score</th>
                    <th className="pr-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {matchups.map((matchup, index) => (
                    <tr
                      key={index}
                      className="border-b-2 lg:text-xl text-sm text-gray-700 text-nowrap capitalize hover:bg-purple-500 hover:text-black hover:scale-105 duration-150"
                    >
                      <td className="pr-2">{matchup.name}</td>
                      <td className="pr-2">{matchup.team1.teamName}</td>
                      <td className="pr-2">{matchup.team2.teamName}</td>
                      <td className="pr-2">
                        {matchup.team1Score} - {matchup.team2Score}
                      </td>
                      <td className="pr-2">
                        <button
                          onClick={() => deleteMatchup(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

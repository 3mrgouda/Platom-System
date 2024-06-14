import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaCaretDown } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

export default function Teams() {
  const getMembersFromStorage = localStorage.getItem("members");

  const [teams, setTeams] = useState([
    {
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
    {
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
    {
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
    {
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
  ]);
  const [members, setMembers] = useState(
    getMembersFromStorage ? JSON.parse(getMembersFromStorage) : []
  );

  const [visibleButton, setVisibleButton] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    teamMembers: [],
  });
  const [warningMessage, setWarningMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownOpenTeams, setDropdownOpenTeams] = useState({});

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleTeamDropdown = (teamId) => {
    setDropdownOpenTeams((prevState) => ({
      ...prevState,
      [teamId]: !prevState[teamId],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMemberSelect = (member) => {
    if (formData.teamMembers.find((m) => m.id === member.id)) {
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      teamMembers: [...prevFormData.teamMembers, member],
    }));
  };

  const addNewMember = (e) => {
    e.preventDefault();
    const { teamName, teamMembers } = formData;
    if (!teamName || teamMembers.length === 0) {
      setWarningMessage("All fields are required");
      return;
    }
    const newTeam = {
      id: teams.length,
      teamName,
      teamMembers,
      numberOfMembers: teamMembers.length,
    };
    setTeams([...teams, newTeam]);
    setFormData({
      teamName: "",
      teamMembers: [],
    });
    setWarningMessage("");
    setVisibleButton(false);
  };

  const deleteMember = (index) => {
    const newTeams = teams.filter((_, i) => i !== index);
    setTeams(newTeams);
  };

  const filteredMembers = members.filter((member) => {
    return !teams.some((team) =>
      team.teamMembers.some((tm) => tm.id === member.id)
    );
  });

  return (
    <div className="w-full">
      <div className="w-full container lg:mx-auto">
        <form
          className="w-[80%] mx-auto items-center flex justify-center lg:block "
          style={{ display: visibleButton ? "flex" : "none" }}
          onSubmit={addNewMember}
        >
          <input
            value={formData.teamName}
            onChange={handleChange}
            name="teamName"
            className="border-solid border-2 border-black rounded-md lg:hover:scale-105 duration-200 lg:px-2 py-1 hover:border-purple-500"
            type="text"
            placeholder="Team Name"
          />

          <fieldset className="cursor-pointer relative">
            <div
              className="inline-block hover:text-primary font-semibold text-xl"
              onClick={toggleDropdown}
            >
              <div className="flex items-center gap-[2px] py-2">
                Members
                <span>
                  <FaCaretDown
                    className={`duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
            </div>
            <div
              className={`absolute z-50 ${
                isDropdownOpen ? "block" : "hidden"
              } w-[200px] shadow-md p-2 hover:shadow-purple-500 bg-white rounded-md`}
            >
              <ul className="flex flex-col gap-2">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, i) => (
                    <li
                      key={i}
                      className={`cursor-pointer p-2 font-semibold text-xl ${
                        formData.teamMembers.find((m) => m.id === member.id)
                          ? "bg-purple-100"
                          : "hover:bg-primary/20 hover:bg-purple-100"
                      }`}
                      onClick={() => handleMemberSelect(member)}
                    >
                      {`${member.firstName} ${member.lastName}`}
                    </li>
                  ))
                ) : (
                  <li>All Members Selected</li>
                )}
              </ul>
            </div>
          </fieldset>

          {warningMessage && (
            <p className="animate-pulse" style={{ color: "red" }}>
              {warningMessage}
            </p>
          )}
          <button
            type="submit"
            className="flex items-center text-xs lg:text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2"
          >
            <FaPlus className="lg:mr-1" /> Team
          </button>
        </form>

        <table className="w-[80%] mx-auto my-4 text-left">
          <thead>
            <tr className="lg:text-2xl capitalize border-b-2">
              <th className="pr-2 lg:pr-0">ID</th>
              <th className="pr-2 lg:pr-0">Team</th>
              <th className="pr-2 lg:pr-0">Members</th>
              <th className="pr-2 lg:pr-0">Number</th>
              <th className="pr-2 lg:pr-0">
                <button
                  className="flex items-center text-sm px-1 lg:text-xl bg-purple-500 rounded-md lg:px-2 lg:mt-[2px] lg:font-bold"
                  onClick={() => setVisibleButton((prevState) => !prevState)}
                >
                  {visibleButton ? (
                    <FaMinus className="mr-2" />
                  ) : (
                    <FaPlus className="mr-2" />
                  )}
                  {visibleButton ? "Close" : "Add"}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => (
              <tr
                key={team.id}
                className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500 hover:text-black hover:scale-105 duration-150"
              >
                <td className="pr-2 lg:pr-0">{i + 1}</td>
                <td className="pr-2 lg:pr-0">{team.teamName}</td>
                <td className="pr-2 lg:pr-0">
                  <div
                    className="inline-block hover:text-primary font-semibold text-xl cursor-pointer"
                    onClick={() => toggleTeamDropdown(team.id)}
                  >
                    <div className="flex items-center gap-[2px] py-2">
                      <span>
                        <FaCaretDown
                          className={`duration-300 ${
                            dropdownOpenTeams[team.id] ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      Members
                    </div>
                  </div>
                  <div
                    className={`${
                      dropdownOpenTeams[team.id] ? "block absolute" : "hidden"
                    }`}
                  >
                    <ul className="bg-white p-3 shadow-md hover:shadow-purple-500">
                      {team.teamMembers.map((member, index) => (
                        <li
                          key={index}
                          className="cursor-pointer p-2 font-semibold text-xl hover:bg-primary/20 hover:bg-purple-100"
                        >
                          {`${member.firstName} ${member.lastName}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </td>
                <td>{team.numberOfMembers}</td>
                <td>
                  <button onClick={() => deleteMember(i)} className="ml-5">
                    <AiOutlineUsergroupDelete className="hover:scale-150 cursor-pointer hover:bg-red-600 hover:rounded-md duration-200" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

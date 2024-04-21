import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

export default function Teams() {
  const [temValue, setTemValue] = useState("");
  const [teams, setteams] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");

  const addNewteam = () => {
    if (teams.some((team) => team.memName === temValue)) {
      setWarningMessage(
        "team with the same name already exists. Please enter a different name."
      );
      return;
    }

    const newteam = { id: teams.length, memName: temValue };
    setteams((prevteams) => [...prevteams, newteam]);
    localStorage.setItem("teams", JSON.stringify([...teams, newteam]));
    setTemValue("");
    setWarningMessage("");
  };

  useEffect(() => {
    const storedteams = localStorage.getItem("teams");
    if (storedteams) {
      setteams(JSON.parse(storedteams));
    }
  }, []);

  const deleteteam = (index) => {
    const updatedteams = teams.filter((_, i) => i !== index);
    setteams(updatedteams);
    localStorage.setItem("teams", JSON.stringify(updatedteams));
  };

  const [visibleButton, setVisibleButton] = useState(false);
  const handleVisibleButton = () => {
    setVisibleButton((prevVisibleButton) => !prevVisibleButton);
  };

  return (
    <div className="w-full">
      <div className=" w-full container lg:mx-auto">
        <div
          className="w-[80%] mx-auto  items-center justify-evenly hidden"
          style={{ display: visibleButton ? "flex" : "none" }}
        >
          <input
            value={temValue}
            onChange={(e) => setTemValue(e.target.value)}
            className={`border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500 ${
              warningMessage ? "border-red-500" : ""
            }`}
            type="text"
            placeholder={warningMessage || "Add New team"}
          />
          {warningMessage && <p style={{ color: "red" }}>{warningMessage}</p>}
          <button
            onClick={addNewteam}
            className="flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2"
          >
            <FaPlus /> team
          </button>
        </div>

        <table className="w-[80%] mx-auto my-4 text-left">
          <thead className="border ">
            <tr className="lg:text-2xl capitalize">
              <th>ID</th>
              <th>teams</th>
              <th>Delete</th>
              <th>
                <button
                  className="flex items-center text-xl bg-purple-500 rounded-md  px-2 lg:mt-[2px] font-bold"
                  onClick={() => handleVisibleButton()}
                >
                  <FaPlus />
                  Add
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map((mem, i) => {
              return (
                <tr
                  key={i}
                  className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500  hover:text-black hover:scale-105 duration-150"
                >
                  <td>{i + 1}</td>
                  <td>{mem.memName}</td>
                  <td>
                    <button onClick={() => deleteteam(i)} className="ml-5">
                      <AiOutlineUsergroupDelete className="hover:scale-150 cursor-pointer hover:bg-red-600 hover:rounded-md duration-200" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

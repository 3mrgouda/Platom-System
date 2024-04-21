import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

export default function Members() {
  const [memValue, setMemValue] = useState("");
  const [members, setMembers] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const addNewMember = () => {
    if (members.some((member) => member.memName === memValue)) {
      setWarningMessage(
        "Member with the same name already exists. Please enter a different name."
      );
      return;
    }

    const newMember = { id: members.length, memName: memValue };
    setMembers((prevMembers) => [...prevMembers, newMember]);
    localStorage.setItem("members", JSON.stringify([...members, newMember]));
    setMemValue("");
    setWarningMessage("");
  };

  useEffect(() => {
    const storedMembers = localStorage.getItem("members");
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  const deleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
    localStorage.setItem("members", JSON.stringify(updatedMembers));
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
            value={memValue}
            onChange={(e) => setMemValue(e.target.value)}
            className={`border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500 ${
              warningMessage ? "border-red-500" : ""
            }`}
            type="text"
            placeholder={warningMessage || "Add New Member"}
          />
          {warningMessage && <p style={{ color: "red" }}>{warningMessage}</p>}
          <button
            onClick={addNewMember}
            className="flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2"
          >
            <FaPlus /> Member
          </button>
        </div>

        <table className="w-[80%] mx-auto my-4 text-left">
          <thead className="border ">
            <tr className="lg:text-2xl capitalize">
              <th>ID</th>
              <th>Members</th>
              <th>Delete</th>
              <th>
                <button
                  className="flex items-center text-xl bg-purple-500 rounded-md  px-2 lg:mt-[2px] font-bold"
                  onClick={() => handleVisibleButton()}
                >
                  {}
                  <FaPlus />
                  Add
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((mem, i) => {
              return (
                <tr
                  key={i}
                  className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500  hover:text-black hover:scale-105 duration-150"
                >
                  <td>{i + 1}</td>
                  <td>{mem.memName}</td>
                  <td>
                    <button onClick={() => deleteMember(i)} className="ml-5">
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

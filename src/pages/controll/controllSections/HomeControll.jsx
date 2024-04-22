import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeControll() {
  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const storedevents = localStorage.getItem("events");
    if (storedevents) {
      setEvents(JSON.parse(storedevents));
    }
    const storedteams = localStorage.getItem("teams");
    if (storedteams) {
      setTeams(JSON.parse(storedteams));
    }
  }, []);
  const [collectionData, setCollectionData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    event: "",
    fristteam: "",
    secondteam: "",
  });

  const pushSelectedData = () => {
    setCollectionData((prevCollectionData) => {
      const newCollectionData = [...prevCollectionData, selectedData];
      localStorage.setItem("collectionData", JSON.stringify(newCollectionData));
      return newCollectionData;
    });
    setSelectedData({
      event: "",
      fristteam: "",
      secondteam: "",
    });
  };

  useEffect(() => {
    const storedCollectionData = localStorage.getItem("collectionData");
    if (storedCollectionData) {
      setCollectionData(JSON.parse(storedCollectionData));
    }
  }, []);


  const deleteCollectionData = (index) => {
    const updateCollectionData = collectionData.filter((_, i) => i !== index);
    setCollectionData(updateCollectionData);
    localStorage.setItem("collectionData", JSON.stringify(updateCollectionData));
  };
  return (
    <div className="w-[80%] mx-auto">
      <form className="flex w-[80%] mx-auto my-4 justify-between">
        <fieldset className="events">
          <select
            value={selectedData.event}
            onChange={(e) =>
              setSelectedData({ ...selectedData, event: e.target.value })
            }
            className="cursor-pointer outline-1 outline-purple-500 border-purple-500 border-2 rounded-sm border-solid"
          >
            <option value="">Choose The Event</option>
            {events.map((event) => (
              <option value={event.memName}>{event.memName}</option>
            ))}
          </select>
        </fieldset>

        <fieldset className="firts-team">
          <select
            value={selectedData.fristteam}
            onChange={(e) =>
              setSelectedData({ ...selectedData, fristteam: e.target.value })
            }
            className="cursor-pointer outline-1 outline-purple-500 border-purple-500 border-2 rounded-sm border-solid"
          >
            <option value="">Choose The First Team</option>
            {teams.map((team) => (
              <option value={team.memName} key={team.id}>
                {team.memName}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="second-team">
          <select
            value={selectedData.secondteam}
            onChange={(e) =>
              setSelectedData({ ...selectedData, secondteam: e.target.value })
            }
            className="cursor-pointer outline-1 outline-purple-500 border-purple-500 border-2 rounded-sm border-solid"
          >
            <option value="">Choose The Second Team</option>
            {teams
              .filter((team) => selectedData?.fristteam !== team.memName)
              .map((team) => (
                <option value={team.memName} key={team.id}>
                  {team.memName}
                </option>
              ))}
          </select>
        </fieldset>

        <input
          onClick={pushSelectedData}
          className="bg-purple-500 py-1 px-5 cursor-pointer rounded-sm hover:rounded-lg duration-100"
          type="button"
          value="Submit"
        />
      </form>

      <table className="w-[80%] mx-auto my-4 text-left">
        <thead className="border ">
          <tr className="lg:text-2xl capitalize">
            <th>ID</th>
            <th>Event</th>
            <th>First Team</th>
            <th>Second Team</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {collectionData.map((data, i) => {
            return (
              <tr key={i} className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500  hover:text-black hover:scale-105 duration-150">
                <td>{i + 1}</td>
                <td>{data.event}</td>
                <td>{data.fristteam}</td>
                <td>{data.secondteam}</td>
                <td>
                    <button onClick={() => deleteCollectionData(i)} className="ml-5">
                      <AiOutlineUsergroupDelete className="hover:scale-150 cursor-pointer hover:bg-red-600 hover:rounded-md duration-200" />
                    </button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}



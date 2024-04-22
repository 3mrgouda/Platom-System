import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

export default function Events() {
  const [evntValue, setEvntValue] = useState("");
  const [events, setevents] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const addNewEvent = () => {
    if (events.some((team) => team.memName === evntValue)) {
      setWarningMessage(
        "event with the same name already exists. Please enter a different name."
      );
      return;
    }

    const newEvent = { id: events.length, memName: evntValue };
    setevents((prevevents) => [...prevevents, newEvent]);
    localStorage.setItem("events", JSON.stringify([...events, newEvent]));
    setEvntValue("");
    setWarningMessage("");
  };

  useEffect(() => {
    const storedevents = localStorage.getItem("events");
    if (storedevents) {
      setevents(JSON.parse(storedevents));
    }
  }, []);

  const deleteteam = (index) => {
    const updatedevents = events.filter((_, i) => i !== index);
    setevents(updatedevents);
    localStorage.setItem("events", JSON.stringify(updatedevents));
  };

  const [visibleButton, setVisibleButton] = useState(false);
  const handleVisibleButton = () => {
    setVisibleButton((prevVisibleButton) => !prevVisibleButton);
  };

  return (
    <div className="w-full">
      <div className=" w-full container lg:mx-auto">
        <div
          className="w-[80%] mx-auto  ievnts-center justify-evenly hidden"
          style={{ display: visibleButton ? "flex" : "none" }}
        >
          <div
            className={`${warningMessage ? "alert-msg show-warn" : "hidden"}`}
            ref={(el) => {
              if (warningMessage && el) {
                setTimeout(() => {
                  el.classList.remove("show-warn");
                  setTimeout(() => {
                    setWarningMessage("");
                  }, 300);
                }, 2000);
              }
            }}
          >
            <p className="text-red-500">{warningMessage}</p>
          </div>
          <input
            value={evntValue}
            onChange={(e) => setEvntValue(e.target.value)}
            className="border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500 capitalize"
            type="text"
            placeholder="Add New Event"
          />
          <button
            onClick={addNewEvent}
            className="flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2"
          >
            <FaPlus /> event
          </button>
        </div>

        <table className="w-[80%] mx-auto my-4 text-left">
          <thead className="border ">
            <tr className="lg:text-2xl capitalize">
              <th>ID</th>
              <th>events</th>
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
            {events.map((mem, i) => {
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

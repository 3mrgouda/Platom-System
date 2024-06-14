import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

export default function Members() {
  const getMembersFromStorage = localStorage.getItem("members");

  const [members, setMembers] = useState(
    getMembersFromStorage
      ? JSON.parse(getMembersFromStorage)
      : [
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
        ]
  );

  const [visibleButton, setVisibleButton] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
  });
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const handleVisibleButton = () => {
    setVisibleButton((prevVisibleButton) => !prevVisibleButton);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addNewMember = (e) => {
    e.preventDefault();
    const { firstName, lastName, gender, age } = formData;
    if (!firstName || !lastName || !gender || !age) {
      setWarningMessage("All fields are required");
      return;
    }
    const newMember = {
      id: members.length,
      firstName,
      lastName,
      gender,
      age: parseInt(age),
    };
    setMembers([...members, newMember]);
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
    });
    setWarningMessage("");
    setVisibleButton(false);
  };

  const deleteMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  return (
    <div className="w-full">
      <div className="w-full container lg:mx-auto">
        <form
          className="w-[80%] mx-auto items-center justify-evenly"
          style={{ display: visibleButton ? "flex" : "none" }}
          onSubmit={addNewMember}
        >
          <input
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            className="border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500"
            type="text"
            placeholder="First Name"
          />
          <input
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            className="border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500"
            type="text"
            placeholder="Last Name"
          />
          <select
            value={formData.gender}
            onChange={handleChange}
            name="gender"
            className="border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500"
          >
            <option disabled value="">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            value={formData.age}
            onChange={handleChange}
            name="age"
            className="border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500"
            type="number"
            placeholder="Age"
          />
          {warningMessage && (
            <p className="animate-pulse" style={{ color: "red" }}>
              {warningMessage}
            </p>
          )}
          <button
            type="submit"
            className="flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2"
          >
            <FaPlus /> Member
          </button>
        </form>

        <table className="text-nowrap w-[80%] mx-auto my-4 text-left">
          <thead className="border">
            <tr className="lg:text-2xl capitalize">
              <th className="pr-2 lg:pr-0">ID</th>
              <th className="pr-2 lg:pr-0">First Name</th>
              <th className="pr-2 lg:pr-0">Last Name</th>
              <th className="pr-2 lg:pr-0">Gender</th>
              <th className="pr-2 lg:pr-0">Age</th>
              <th className="pr-2 lg:pr-0">Delete</th>
              <th>
                <button
                  className="flex items-center text-xl bg-purple-500 rounded-md px-1 lg:px-2 lg:mt-[2px] font-bold"
                  onClick={handleVisibleButton}
                >
                  {visibleButton ? <FaMinus /> : <FaPlus />}
                  {visibleButton ? (
                    <span className="lg:block hidden">Close</span>
                  ) : (
                    <span className="lg:block hidden">Add</span>
                  )}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((mem, i) => (
              <tr
                key={mem.id}
                className="border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500 hover:text-black hover:scale-105 duration-150"
              >
                <td>{i + 1}</td>
                <td>{mem.firstName}</td>
                <td>{mem.lastName}</td>
                <td>{mem.gender}</td>
                <td>{mem.age}</td>
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

import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { FaPlus } from "react-icons/fa6";
import { AiOutlineUsergroupDelete } from "react-icons/ai";




const Teams = () => {

  const [team, setTeam] = useState([]);
  const [member, setMember] = useState([])
  const [newTeamMember, setNewTeamMember] = useState([]);

  // Collection reference
  const colRef = collection(db, "teams");
  const colref = collection(db, "members");

  // Function to add a new team member
  const addTeamMember = async () => {
    try {
      // Add data to Firestore
      await addDoc(colRef, { Tname: newTeamMember }); // Add your desired data structure here
      console.log("New team member added successfully!");
      // Clear the input field
      setNewTeamMember('');
      setIsVisible
      location.reload();
    } catch (error) {
      console.error("Error adding new team member: ", error);
    }
  };

  // Fetch collection data
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        const teamsDocs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setTeam(teamsDocs);
      })
      .catch(err => {
        console.error("Error fetching team data: ", err);
      });
  }, []);

  // get collection members
  // useEffect(() => {
  //   getDocs(colref).then((snapshot) => {
  //     var membersDocs = [];
  //     snapshot.docs.forEach((doc) => {
  //       membersDocs.push({ ...doc.data(), id: doc.id })
  //     })
  //     setMember(membersDocs)
  //   })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // }, [])
  const [isVisble, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisble)
  }



  //delet items
  const handleDelete = async (id, Tname) => {
    try {
      await deleteDoc(doc(db, 'teams', id))
      alert(`" ${Tname} Team " has deleted succesfully`);
      location.reload();

    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };
  return (
    <>
      <div className=" w-full container lg:mx-auto">

        <div id='add-setion' className='w-[80%] mx-auto  items-center justify-evenly hidden' style={{ display: isVisble ? 'flex' : isVisble }}>
          <input className='border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500' value={newTeamMember} onChange={(e) => setNewTeamMember(e.target.value)} type="text" placeholder='Team Name' />
          <button className='flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2' onClick={addTeamMember}> <FaPlus /> Add New Team</button>
        </div>

        <table className='w-[80%] mx-auto my-4 text-left'>
          <thead className='border ' >

            <tr className='lg:text-2xl'>
              <th>ID</th>
              <th>Team name</th>
              {/* <th>Members</th> */}
              <th>Event</th>
              <th>Update</th>
              <th>Delete</th>
              <th>
                <button onClick={() => toggleVisibility()} className='flex items-center text-xl bg-purple-500 rounded-md  px-2 lg:mt-[3px] font-bold'> <FaPlus />Add</button>

              </th>
            </tr>

          </thead>
          <tbody>

            {
              team.map((tem, i) => {

                return (
                  <tr key={i} className='border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500 cursor-pointer hover:text-black hover:scale-105 duration-150'>
                    <td>{i + 1}</td>
                    <td>{tem.Tname}</td>
                    {/* {
                      member.map((mem) => {
                        return (
                          <td>{mem.Fname}</td>

                        )
                      })
                    } */}
                    <td>event</td>
                    <td>update</td>
                    <td><button onClick={() => handleDelete(tem.id, tem.Tname)} className='ml-5'><AiOutlineUsergroupDelete className='hover:scale-150 hover:bg-red-600 hover:rounded-md duration-200' /></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Teams
import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { FaPlus } from "react-icons/fa6";



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

  return (
    <>
      <div className=" w-full container lg:mx-auto">

        <div className='w-[80%] mx-auto flex items-center justify-evenly'> 
          <input className='border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500' value={newTeamMember} onChange={(e) => setNewTeamMember(e.target.value)} type="text" placeholder='Team Name' />
          <button className='flex items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2' onClick={addTeamMember}> <FaPlus/> Add New Team</button>
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
            </tr>

          </thead>
          <tbody>

            {
              team.map((tem, i) => {
                return (
                  <tr key={i} className='border-b-2 lg:text-xl text-gray-700 capitalize'>
                    <td>{i + 1}</td>
                    <td>{tem.Tname}</td>
                    {/* {
                      member.map((mem) => {
                        return (
                          <td>{mem.Fname}</td>

                        )
                      })
                    } */}
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
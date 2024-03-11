import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { FaCaretDown, FaPlus } from 'react-icons/fa6';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';



export default function Memebers() {
  const [member, setMember] = useState([]);
  const [team, setTeam] = useState([]);
  // Collection ref
  const colRef = collection(db, "members" );
  const colref = collection(db, "teams");

  // get members data
  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      var membersDocs = [];
      snapshot.docs.forEach((doc) => {
        membersDocs.push({ ...doc.data(), id: doc.id })
      })
      setMember(membersDocs)
    })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  //get teams data
  useEffect(() => {
    getDocs(colref).then((snapshot) => {
      var teamDoc = [];
      snapshot.docs.forEach((doc) => {
        teamDoc.push({ ...doc.data(), id: doc.id })
      })
      setTeam(teamDoc)
    })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  //add data
  const [newMember, setNewMember] = useState([]);
  const addNewMember = async () => {
    try {
      // Add data to Firestore
      await addDoc(colRef, { name: newMember }); // Add your desired data structure here
      console.log("New  member added successfully!");
      // Clear the input field
      setNewMember('');


      //show new data with out reload 
      getDocs(colRef).then((snapshot) => {
        var membersDocs = [];
        snapshot.docs.forEach((doc) => {
          membersDocs.push({ ...doc.data(), id: doc.id })
        })
        setMember(membersDocs)
      })


        .catch(err => {
          console.log(err.message)
        })

    } catch (error) {
      console.error("Error adding new  member: ", error);
    }
  };

  // const sellectTeam = (id, Tname) => {
  //   let teamsList = document.getElementById('teamsList');
  //   teamsList.innerHTML = Tname;
  //   setTemShow(teamsList.innerHTML)
  // }

  //handle show add section
  const [visible, setVisible] = useState(false);
  const handleVisibleAdd = () => {
    setVisible(!visible);
  }


  //delet items
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'members', id))

      //to show new data after editting
      getDocs(colRef)
        .then((snapshot) => {
          const membersDocs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setMember(membersDocs);
        })



        .catch(err => {
          console.error("Error fetching team data: ", err);
        });
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  //this for team list in add new member
let teamsList = document.getElementById('teamsList');
const [temShow ,setTemShow] =useState();
  

  return (
    <div className='w-full'>

      <div className=" w-full container lg:mx-auto">

        <div className='w-[80%] mx-auto  items-center justify-evenly hidden' style={{ display: visible ? 'flex' : visible }} >
          <input value={newMember} onChange={(e) => setNewMember(e.target.value)} className='border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500' type="text" placeholder='Add New Member' />



          {/* simple drop-down and links  */}
          <div className='cursor-pointer group hidden md:block'>
            <a href="" className='inline-block hover:text-primary font-semibold text-xl'>
              <div className='flex items-center gap-[2px] py-2' id='teamsList'>Teams <span id='parentIcon'><FaCaretDown className='group-hover:rotate-180 duration-300' /></span></div>
            </a>
            {/* drop-down section */}
            <div className='absolute bg-white z-50 hidden group-hover:block w-[200px] shadow-md p-2'>
              <ul>{
                team.map((tem , i) => (
                  <li className='font-mono font-bold text-2xl' onClick={() =>{
                    teamsList.innerHTML = tem.Tname
                    setTemShow(tem.Tname,i)
                  } }>{tem.Tname}</li>
                ))


              }
              </ul>
            </div>
          </div>



          <button onClick={() => addNewMember()} className='flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2'> <FaPlus /> Add New Member</button>
        </div>

        <table className='w-[80%] mx-auto my-4 text-left'>
          <thead className='border ' >

            <tr className='lg:text-2xl'>
              <th>ID</th>
              <th>Name</th>
              <th>Team</th>
              <th>Event</th>
              {/* <th>Update</th> */}
              <th>Delete</th>
              <th>                <button className='flex items-center text-xl bg-purple-500 rounded-md  px-2 lg:mt-[2px] font-bold' onClick={() => handleVisibleAdd()} > <FaPlus />Add</button>
              </th>
            </tr>

          </thead>
          <tbody>

            {
              member.map((mem, i) => {
                return (
                  <tr key={i} className='border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500  hover:text-black hover:scale-105 duration-150'>
                    <td>{i + 1}</td>
                    <td>{mem.name}</td>
                    <td>{temShow}</td>                 
                  
                    {/* <td>
                      <button className='cursor-pointer'>Update</button>
                    </td> */}

                    <td><button onClick={() => handleDelete(mem.id)} className='ml-5'><AiOutlineUsergroupDelete className='hover:scale-150 cursor-pointer hover:bg-red-600 hover:rounded-md duration-200' /></button></td>

                  </tr>
                )
              })
            }



          </tbody>
        </table>
      </div>

    </div>
  )
}

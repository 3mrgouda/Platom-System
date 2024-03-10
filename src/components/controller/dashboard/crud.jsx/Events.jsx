import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { FaPlus } from "react-icons/fa6";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";





const Events = () => {

  const [event, setEvent] = useState([]);
  const [newEvent, setNewEvent] = useState([]);

  // Collection reference
  const colRef = collection(db, "events");

  // Function to add a new team member
  const addNewEvent = async () => {
    try {
      // Add data to Firestore
      await addDoc(colRef, { name: newEvent }); // Add your desired data structure here
      console.log("New event added successfully!");
      // Clear the input field
      setNewEvent('');
      setIsVisible
      
 //to show new data after editting
 getDocs(colRef)
 .then((snapshot) => {
   const eventDocs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
   setEvent(eventDocs);
 })

    } catch (error) {
      console.error("Error adding new event: ", error);
    }
  };

  // Fetch collection data
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        const eventDocs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setEvent(eventDocs);
      })
      .catch(err => {
        console.error("Error fetching event data: ", err);
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
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'events', id))
      

      //to show new data after editting
      getDocs(colRef)
      .then((snapshot) => {
        const eventDocs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setEvent(eventDocs);
      })



      .catch(err => {
        console.error("Error fetching event data: ", err);
      });
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };
  return (
    <>
      <div className=" w-full container lg:mx-auto">

        <div id='add-setion' className='w-[80%] mx-auto  items-center justify-evenly hidden' style={{ display: isVisble ? 'flex' : isVisble }}>
          <input className='border-solid border-2 border-black rounded-md hover:scale-105 duration-200 px-2 py-1 hover:border-purple-500' value={newEvent} onChange={(e) => setNewEvent(e.target.value)} type="text" placeholder='Team Name' />
          <button className='flex group items-center text-xl border-solid border-2 shadow-md hover:shadow-sm shadow-black hover:shadow-purple-500 border-purple-500 rounded-md py-1 hover:border-black duration-200 hover:scale-105 px-2' onClick={addNewEvent}> <FaPlus /> Add New Event</button>
        </div>

        <table className='w-[80%] mx-auto my-4 text-left'>
          <thead className='border ' >

            <tr className='lg:text-2xl'>
              <th>ID</th>
              <th>Event</th>
              {/* <th>Team name</th> */}
              {/* <th>Members</th> */}
              
              {/* <th>Update</th> */}
              <th>Delete</th>
              <th>
                <button onClick={() => toggleVisibility()} className='flex items-center text-xl bg-purple-500 rounded-md  px-2 lg:mt-[2px] font-bold'> <FaPlus />Add</button>

              </th>
            </tr>

          </thead>
          <tbody>

            {
              event.map((evn, i) => {

                return (
                  <tr key={i} className='border-b-2 lg:text-xl text-gray-700 capitalize hover:bg-purple-500 hover:text-black hover:scale-105 duration-150'>
                    <td>{i + 1}</td>
                    <td>{evn.name}</td>
                    {/* {
                      member.map((mem) => {
                        return (
                          <td>{mem.Fname}</td>

                        )
                      })
                    } */}
                    <td>event</td>
                    {/* <td><button  className='ml-5'><FiEdit className='hover:scale-150 hover:bg-red-600 hover:rounded-md duration-200' /></button></td> */}
                    <td><button onClick={() => handleDelete(evn.id)} className='ml-5'><AiOutlineUsergroupDelete className='hover:scale-150 cursor-pointer hover:bg-red-600 hover:rounded-md duration-200' /></button></td>
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

export default Events

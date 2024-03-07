import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase';
import { collection, getDocs } from 'firebase/firestore';



export default function Memebers() {
  const [member, setMember] = useState([])
  // Collection ref
  const colRef = collection(db, "members");

  // get collection data
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
  return (
    <div className='w-full'>
      <div className=" w-full container lg:mx-auto">
        <table className='w-[80%] mx-auto my-4 text-left'>
          <thead className='border ' >

            <tr className='lg:text-2xl'>
              <th>ID</th>
              <th>Frist name</th>
              <th>Last name</th>
              <th>Team</th>
              <th>Event</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>

          </thead>
          <tbody>

            {
              member.map((mem , i) => {
                return (
                  <tr className='border-b-2 lg:text-xl text-gray-700 capitalize'>
              <td>{mem.iD}</td>
              <td>{mem.Fname}</td>
              <td>{mem.Lname}</td>
              <td>{mem.Team}</td>
              <td>{mem.Event}</td>
              <td>
                <button>Update</button>
                </td>
                <td>
                <button>Delete</button>
              </td>
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

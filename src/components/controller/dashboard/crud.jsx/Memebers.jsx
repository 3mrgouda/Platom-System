import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import React from 'react';
import { App } from '../../../Firebase';


export default function Memebers() {
  const db = getFirestore(App);
  // Collection ref
  const colRef = collection(db, "members");

  // get collection data
  getDocs(colRef).then((snapshot) => {
    let members = [];
    snapshot.docs.forEach((doc) => {
      members.push({ ...doc.data(), id: doc.id })
    })
    console.log(members)
  })
    .catch(err => {
      console.log(err.message)
    })

  return (
    <div className='w-full'>
      <div className=" w-full container lg:mx-auto">
        <table className='w-[80%] mx-auto my-4 text-left'>
          <thead className='border' >
            <tr> <th>ID</th>
              <th>Name</th>
              <th>Team</th>
              <th>Event</th>
              <th>Actoins</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Amr Mohamed</td>
              <td>flibbers</td>
              <td>collage</td>
              <td>
                 <button>Update</button>
              <button>Delet item</button>
              </td>
             
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

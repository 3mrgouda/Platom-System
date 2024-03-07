import React from 'react';



export default function Memebers() {
 
  return (
    <div className='w-full'>
      <div className=" w-full container lg:mx-auto">
        <table className='w-[80%] mx-auto my-4 text-left'>
          <thead className='border ' >

            <tr className='lg:text-2xl'>
              <th>ID</th>
              <th>Name</th>
              <th>Team</th>
              <th>Event</th>
              <th>Actoins</th>
            </tr>

          </thead>
          <tbody>


            <tr className='border-b-2 lg:text-xl text-gray-700 capitalize'>
              <td>1</td>
              <td>Amr Mohamed</td>
              <td>flibbers</td>
              <td>collage</td>
              <td>
                <button className='mr-3'>Update</button>
                <button>Delet item</button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>

    </div>
  )
}

import React from 'react'

function Add() {
    
  return (
    <>
<form className='m-10'>
    <input className='border m-2' type="text" name='title' placeholder='title' required /><br/>
    <input className='border m-2' type="number" name='amount' placeholder='amount' required /><br/>
    <button className='border m-2'>Add new item</button>
</form>

{/* <form>
    <input type="text" name='id' />
    <button>delete item</button>
</form> */}
    </>
  )
}

export default Add
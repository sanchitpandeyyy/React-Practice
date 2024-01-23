import React, { useState } from 'react'

const Form = () => {

const [fullname, setFullName]=useState();
const [name, setName]=useState();

const handleName = (e)=>{
    setName(e.target.value)
    console.log(e.target.value);
}

const submit=()=>{
    setFullName(name)
}

  return (
    <div className='bg-blue-700 w-48 text-center'>
        <h1 className='font-medium '>Hello! {fullname}</h1>
        <input type="text" placeholder='enter your name' onChange={handleName} defaultValue=''
         className='border-2 text-center border-yellow-300 rounded-md text-blue-950'/>
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Form
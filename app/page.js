'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [mainTask, setmainTask] = useState([])
 
  // e.preventDefault form ko submit hone se rok leti hai
  const submithandler  =(e)=>{
   e.preventDefault()
   setmainTask([...mainTask, {title, desc}])
   settitle('')
   setdesc('')
   console.log(mainTask)
  }

  const deleteHandler =(i)=>{
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
  }

   let renderTask = <h2 className=' mx-[14%]'>No task Available</h2>

  if(mainTask.length>0){
    renderTask =  mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-around mx-[5%] mb-5 w-2/3 '>
        <h5 className='text-2xl mx-14 font-semibold'>{t.title}</h5>
        <h6 className='text-lg mx-14 font-medium'>{t.desc}</h6>
        <button onClick={
        ()=>{deleteHandler(i)}
      } className='bg-red-400 text-white  px-4 py-2 rounded font-bold'>
        Delete</button>
      </div>
      
        </li>
      )
       })
  }
  
  return (
      <>

    <h1 className='bg-black text-white text-6xl font-bold p-5  text-center'> My ToDo List</h1>
  <form className='mx-[15%]' onSubmit={submithandler}>
     <input  type='text' className='text-2xl px-2 py-1 border-zinc-800   border-4'
      placeholder='Enter title  here'
      value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}
      />   

    <input  type='text' className='text-2xl px-2 py-1 border-zinc-800  m-8 border-4'
      placeholder='Enter Description here'
      value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}
      /> 

   <button className= ' bg-black text-white px-5 py-3 text-xl font-bold rounded'>Add Task</button>
   </form>
   <hr>
   </hr>
   <div className='p-8 bg-slate-200'>
     <ul>
      {renderTask}
     </ul>
   </div>

      </>
    
  )
}



export default page

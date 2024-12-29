import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='mt-10'>
    <div className='flex gap-4 text-white'>
        <div className='w-[45%] px-10 py-5 rounded-xl bg-red-400'>
        <h2 className='font-bold text-3xl'>0</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] px-10 py-5 rounded-xl bg-blue-400'>
        <h2 className='font-bold text-3xl'>0</h2>
        <h3 className='text-2xl font-semibold'>Completed Task</h3>
        </div>
        <div className='w-[45%] px-10 py-5 text-black rounded-xl bg-green-400'>
        <h2 className='font-bold text-3xl'>0</h2>
        <h3 className='text-2xl font-semibold'>Accepted Task</h3>
        </div>
        <div className='w-[45%] px-10 py-5 rounded-xl bg-yellow-400'>
        <h2 className='font-bold text-3xl'>0</h2>
        <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>
      
    </div>
    </div>
  )
}

export default TaskListNumber
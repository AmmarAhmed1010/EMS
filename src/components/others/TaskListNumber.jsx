import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-wrap gap-6 justify-center'>
        {/* New Task Card */}
        <div className='w-full sm:w-[45%] lg:w-[22%] px-8 py-6 rounded-xl bg-red-400 shadow-lg transition-all duration-300 hover:scale-105'>
          <h2 className='font-bold text-4xl text-white'>0</h2>
          <h3 className='text-2xl font-semibold text-white mt-2'>New Task</h3>
        </div>

        {/* Completed Task Card */}
        <div className='w-full sm:w-[45%] lg:w-[22%] px-8 py-6 rounded-xl bg-blue-400 shadow-lg transition-all duration-300 hover:scale-105'>
          <h2 className='font-bold text-4xl text-white'>0</h2>
          <h3 className='text-2xl font-semibold text-white mt-2'>Completed Task</h3>
        </div>

        {/* Accepted Task Card */}
        <div className='w-full sm:w-[45%] lg:w-[22%] px-8 py-6 rounded-xl bg-green-400 shadow-lg transition-all duration-300 hover:scale-105'>
          <h2 className='font-bold text-4xl text-white'>0</h2>
          <h3 className='text-2xl font-semibold text-white mt-2'>Accepted Task</h3>
        </div>

        {/* Failed Task Card */}
        <div className='w-full sm:w-[45%] lg:w-[22%] px-8 py-6 rounded-xl bg-yellow-400 shadow-lg transition-all duration-300 hover:scale-105'>
          <h2 className='font-bold text-4xl text-black'>0</h2>
          <h3 className='text-2xl font-semibold text-black mt-2'>Failed Task</h3>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber

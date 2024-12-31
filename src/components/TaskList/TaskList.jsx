import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] flex items-start overflow-x-auto justify-start gap-5 flex-nowrap py-5 mt-10'>
      {/* Task Item */}
      <div className='h-full shrink-0 w-[300px] py-4 px-5 text-white bg-red-500 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-red-600'>
        <div className='flex justify-between items-center py-2'>
          <h3 className='bg-red-600 px-3 text-sm py-1 rounded-md'>High</h3>
          <h3 className='text-sm font-medium'>20 Feb 2024</h3>
        </div>
        <h1 className='mt-5 font-semibold text-xl text-black'>Example task</h1>
        <p className='text-sm mt-3 text-gray-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
      </div>

      {/* Task Item */}
      <div className='h-full shrink-0 w-[300px] py-4 px-5 text-white bg-green-500 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-green-600'>
        <div className='flex justify-between items-center py-2'>
          <h3 className='bg-red-600 px-3 text-sm py-1 rounded-md'>High</h3>
          <h3 className='text-sm font-medium'>20 Feb 2024</h3>
        </div>
        <h1 className='mt-5 font-semibold text-xl text-black'>Example task</h1>
        <p className='text-sm mt-3 text-gray-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
      </div>

      {/* Task Item */}
      <div className='h-full shrink-0 w-[300px] py-4 px-5 text-white bg-yellow-500 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-600'>
        <div className='flex justify-between items-center py-2'>
          <h3 className='bg-red-600 px-3 text-sm py-1 rounded-md'>High</h3>
          <h3 className='text-sm font-medium'>20 Feb 2024</h3>
        </div>
        <h1 className='mt-5 font-semibold text-xl text-black'>Example task</h1>
        <p className='text-sm mt-3 text-gray-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
      </div>

      {/* Task Item */}
      <div className='h-full shrink-0 w-[300px] py-4 px-5 text-white bg-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-blue-600'>
        <div className='flex justify-between items-center py-2'>
          <h3 className='bg-red-600 px-3 text-sm py-1 rounded-md'>High</h3>
          <h3 className='text-sm font-medium'>20 Feb 2024</h3>
        </div>
        <h1 className='mt-5 font-semibold text-xl text-black'>Example task</h1>
        <p className='text-sm mt-3 text-gray-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
      </div>

      {/* Task Item */}
      <div className='h-full shrink-0 w-[300px] py-4 px-5 text-white bg-emerald-500 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-600'>
        <div className='flex justify-between items-center py-2'>
          <h3 className='bg-red-600 px-3 text-sm py-1 rounded-md'>High</h3>
          <h3 className='text-sm font-medium'>20 Feb 2024</h3>
        </div>
        <h1 className='mt-5 font-semibold text-xl text-black'>Example task</h1>
        <p className='text-sm mt-3 text-gray-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
      </div>
    </div>
  )
}

export default TaskList

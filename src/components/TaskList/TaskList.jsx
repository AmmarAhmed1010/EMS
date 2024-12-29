import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap py-5 mt-10'>
   <div className='h-full shrink-0 w-[300px] py-2 px-3 text-white bg-red-400 rounded-xl'>
   <div className=' flex justify-between items-center py-2'>
    <h3 className='bg-red-600 px-3 text-sm py-1'>High</h3>
    <h3>20 Feb 2024</h3>
   </div>
   <h1 className='mt-5 font-semibold text-xl'>Example task</h1>
   <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
   </div>

   <div className='h-full shrink-0 w-[300px] py-2 px-3 text-white bg-green-400 rounded-xl'>
   <div className=' flex justify-between items-center py-2'>
    <h3 className='bg-red-600 px-3 text-sm py-1'>High</h3>
    <h3>20 Feb 2024</h3>
   </div>
   <h1 className='mt-5 font-semibold text-xl'>Example task</h1>
   <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
   </div>
   <div className='h-full shrink-0 w-[300px] py-2 px-3 text-white bg-yellow-400 rounded-xl'>
   <div className=' flex justify-between items-center py-2'>
    <h3 className='bg-red-600 px-3 text-sm py-1'>High</h3>
    <h3>20 Feb 2024</h3>
   </div>
   <h1 className='mt-5 font-semibold text-xl'>Example task</h1>
   <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
   </div>
   <div className='h-full shrink-0 w-[300px] py-2 px-3 text-white bg-blue-400 rounded-xl'>
   <div className=' flex justify-between items-center py-2'>
    <h3 className='bg-red-600 px-3 text-sm py-1'>High</h3>
    <h3>20 Feb 2024</h3>
   </div>
   <h1 className='mt-5 font-semibold text-xl'>Example task</h1>
   <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
   </div>
   <div className='h-full shrink-0 w-[300px] py-2 px-3 text-white bg-emerald-400 rounded-xl'>
   <div className=' flex justify-between items-center py-2'>
    <h3 className='bg-red-600 px-3 text-sm py-1'>High</h3>
    <h3>20 Feb 2024</h3>
   </div>
   <h1 className='mt-5 font-semibold text-xl'>Example task</h1>
   <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero a amet quis voluptatem odit recusandae cum. Delectus, corrupti. Sit consequuntur aut doloribus tenetur sequi harum libero accusamus. Explicabo, sunt?</p>
   </div>
    </div>
  )
}

export default TaskList
import React from 'react';

const AllTask = () => {
  return (
    <div id='alltask' className='bg-[#1c1c1c] h-96 overflow-auto mt-5 py-5 px-4 rounded-xl shadow-md'>
      {/* Task Item 1 */}
      <div className='bg-red-400 mb-4 rounded-xl p-4 flex justify-between items-center text-white'>
        <div>
          <h2 className='font-semibold text-lg'>Sarthak</h2>
          <h3 className='text-xl font-bold'>Make a UI design</h3>
        </div>
        <h5 className='text-sm font-medium'>Status</h5>
      </div>

      {/* Task Item 2 */}
      <div className='bg-yellow-400 mb-4 rounded-xl p-4 flex justify-between items-center text-white'>
        <div>
          <h2 className='font-semibold text-lg'>Sarthak</h2>
          <h3 className='text-xl font-bold'>Make a UI design</h3>
        </div>
        <h5 className='text-sm font-medium'>Status</h5>
      </div>

      {/* Task Item 3 */}
      <div className='bg-green-400 mb-4 rounded-xl p-4 flex justify-between items-center text-white'>
        <div>
          <h2 className='font-semibold text-lg'>Sarthak</h2>
          <h3 className='text-xl font-bold'>Make a UI design</h3>
        </div>
        <h5 className='text-sm font-medium'>Status</h5>
      </div>

      {/* Task Item 4 */}
      <div className='bg-blue-400 mb-4 rounded-xl p-4 flex justify-between items-center text-white'>
        <div>
          <h2 className='font-semibold text-lg'>Sarthak</h2>
          <h3 className='text-xl font-bold'>Make a UI design</h3>
        </div>
        <h5 className='text-sm font-medium'>Status</h5>
      </div>

      {/* Task Item 5 */}
      <div className='bg-orange-400 mb-4 rounded-xl p-4 flex justify-between items-center text-white'>
        <div>
          <h2 className='font-semibold text-lg'>Sarthak</h2>
          <h3 className='text-xl font-bold'>Make a UI design</h3>
        </div>
        <h5 className='text-sm font-medium'>Status</h5>
      </div>
    </div>
  );
};

export default AllTask;

import React from 'react'
import Header from '../others/Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'

const AdminDashboard = () => {
  return (
    <div className='bg-[#1C1C1C] w-full px-8 py-10'>
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard

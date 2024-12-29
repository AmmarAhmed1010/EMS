import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
 const [user, setUser] = useState(null)
 const handleLogin = (email,password) =>{
  if(email == "ammar7298@gmail.com" && password == "123"){
    setUser("admin")
  }
else if(email == "employee1@gmail.com" && password == "123"){
  setUser("employeek")
}  
  else(alert("wrong email"))
 }
  
  return (
   <>
  {!user ? <Login handleLogin={handleLogin}/>:""}
  {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
   </>
  )
}

export default App
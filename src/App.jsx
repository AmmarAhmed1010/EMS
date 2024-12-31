import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContxt } from './context/AuthProvider'

const App = () => {
 const [user, setUser] = useState(null)
 const authData = useContext(AuthContxt)

 const handleLogin = (email,password) =>{
  if(email == "ammar7298@gmail.com" && password == "123"){
    setUser("admin")
  }
else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)
){
  setUser("employee")
}  
  else(alert("wrong email"))
 }

  return (
   <>
  {!user ? <Login handleLogin={handleLogin}/>:""}
  {user == "admin" ? <AdminDashboard/> : ""}
  {user == "employee" ? <EmployeeDashboard/> : ""}
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
   </>
  )
}

export default App
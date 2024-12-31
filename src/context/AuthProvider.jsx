import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
export const AuthContxt =createContext()
const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

   
useEffect(() => {
  const {employees,admin} = getLocalStorage()
  setUserData({employees,admin})
  
}, [])

  return (
    <div>
      <AuthContxt.Provider value={userData}>
      {children}
      </AuthContxt.Provider>
    </div>
  )
}

export default AuthProvider
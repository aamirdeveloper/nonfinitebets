import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isLoggedin = localStorage.getItem('userToken')
  return isLoggedin ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute

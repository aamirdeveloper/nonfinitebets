import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const isLoggedin = localStorage.getItem('userToken');
    return !isLoggedin ? <Outlet /> : <Navigate to="/dashboard" />
}

export default PublicRoute

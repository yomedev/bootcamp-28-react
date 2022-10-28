import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { selectAuth } from '../../redux/auth/select.auth'

const PrivateRoute = () => {
  const { access_token } = useSelector(selectAuth)
  return access_token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
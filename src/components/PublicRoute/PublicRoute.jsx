import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectAuth } from '../../redux/auth/select.auth'

const PublicRoute = () => {
  const { access_token } = useSelector(selectAuth)
  const location = useLocation()
  console.log(location);
  return access_token ? <Navigate to={location.state?.login ?? '/'} /> : <Outlet />
}

export default PublicRoute


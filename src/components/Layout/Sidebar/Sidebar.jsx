import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Login } from './Login/Login'
import { Nav } from './Nav/Nav'

const Sidebar = () => {
  const { isAuth } = useContext(AuthContext)
  
  console.log(isAuth);
  return (
    <aside className="nav nav-pills p-5 bg-light w-100" style={{ maxWidth: '300px', height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: 'max-content' }}>
        {isAuth ? <Nav /> : <Login />}

      </div>
    </aside>

    // {isAuth, username}



  )
}

export default Sidebar
import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar/Sidebar'
import { AuthProvider } from '../../context/AuthContext'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="d-flex h-100 ">
        <Sidebar />

        <main className="tab-content p-5 h-100" style={{ minHeight: '100vh', width: 'calc(100% - 300px)' }}>
          <div className="tab-pane fade show active">
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}

export default Layout

Layout.propType = {
  children: PropTypes.node.isRequired,
}
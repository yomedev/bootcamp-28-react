import React from 'react'

const Sidebar = () => {
  return (
    <aside className="nav nav-pills p-5 bg-light w-100" style={{ maxWidth: '300px', height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: 'max-content' }}>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-light">
          Home page
        </a>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-light">
          Profile
        </a>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-light">
          Messages
        </a>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-light">
          Settings
        </a>

      </div>
    </aside>





  )
}

export default Sidebar
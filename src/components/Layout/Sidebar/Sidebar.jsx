import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Status } from '../../../constants/fetch-status'
import { selectAuth } from '../../../redux/auth/select.auth'
import { NotAuth } from './NotAuth/NotAuth'
import { UserNav } from './UserNav/UserNav'

const Sidebar = () => {
  const { status } = useSelector(selectAuth)
  return (
    <aside className="nav nav-pills p-4 bg-light w-100" style={{ maxWidth: '300px' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: 'max-content' }}>
        {status === Status.SUCCESS ? <UserNav /> : <NotAuth />}
      </div>
    </aside>




  )
}

export default Sidebar
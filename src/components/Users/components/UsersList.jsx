import React from 'react'
import { useSelector } from 'react-redux';

import UsersItem from './UsersItem';

const UsersList = ({users}) => {
  return (
    <div className="mb-5">
      {users.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UsersList
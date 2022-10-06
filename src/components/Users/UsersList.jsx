import React from 'react'
import usersJson from '../../assets/users.json';
import UsersItem from './UsersItem';

const UsersList = () => {
  return (
    <div className="mb-5">
      {usersJson.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UsersList
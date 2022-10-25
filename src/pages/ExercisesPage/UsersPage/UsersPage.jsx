import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModalAction } from '../../../redux/users/slice.users';

import { Modal } from '../../../components/Modal/Modal'
import { Button } from '../../../components/Button/Button';
import NewUserForm from '../../../components/Users/components/NewUserForm';
import SearchInput from '../../../components/Users/components/SearchInput';
import UsersList from '../../../components/Users/components/UsersList';
import { selectFilteredUsers, selectUsersIsModalOpen, selectUsersList, selectUsersOpenToWorkTotal, selectUsersSearch } from '../../../redux/users/select.users';
import { useMemo, useState } from 'react';

export const UsersPage = () => {
  const dispatch = useDispatch()
  const toggleModal = () => dispatch(toggleModalAction())

  const filteredUsers = useSelector(selectFilteredUsers)
  const isModalOpen = useSelector(selectUsersIsModalOpen)
  const openToWorkTotal = useSelector(selectUsersOpenToWorkTotal)

  return (
    <>
      <Button className="btn-primary d-flex align-items-center btn-lg mb-5" onClick={toggleModal}>
        <span className="me-2">Add new user</span>
        <FiPlus />
      </Button>

      <p>Open to work total: {openToWorkTotal}</p>
      <SearchInput />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} />

    </>
  )
}

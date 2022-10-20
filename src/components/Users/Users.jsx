import { Component, useMemo, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import usersJson from '../../assets/users.json';
import { changeUsersAvailabilityAction, changeUsersSearchAction, changeUsersSkillsAction, createUserAction, deleteUserAction, toggleNewUserModalAction } from '../../redux/users/action.users';
import { TOGGLE_NEW_USER_MODAL } from '../../redux/users/types.users';
import { Modal } from '../Modal/Modal';

import AvailabilityFilters from './components/AvailabilityFilters';
import NewUserForm from './components/NewUserForm';
import SearchInput from './components/SearchInput';
import SkillsFilters from './components/SkillsFilters';
import UsersList from './components/UsersList';



export const Users = () => {
  const { data: users, isModalOpen, isAvailable, skills, search } = useSelector(state => state.users)
  const dispatch = useDispatch()

  // const handleDeleteUser = userId => {
  //   dispatch(deleteUserAction(userId))
  // };
  const handleCreateNewUser = user => {
    dispatch(createUserAction(user))
    dispatch(toggleNewUserModalAction())
  };

  const toggleModal = () => {
    dispatch(toggleNewUserModalAction())
  };

  // const handleChangeAvailability = () => {
  //   dispatch(changeUsersAvailabilityAction());
  // };

  const handleChangeSkills = event => {
    const { value } = event.target;
    dispatch(changeUsersSkillsAction(value));
  };

  const handleChangeSearch = event => {
    const { value } = event.target;
    dispatch(changeUsersSearchAction(value))
  };

  const handleResetSearch = () => {
    dispatch(changeUsersSearchAction(''));
  };

  const filteredUsers = useMemo(() => {
    return users.filter(({ isOpenToWork, skills: userSkills, name }) => {
      if (isAvailable && !isOpenToWork) return false

      if (skills !== 'all' && !userSkills.includes(skills)) return false

      if (search && !name.toLowerCase().includes(search.toLowerCase())) return false

      return true;
    })
  }, [users, isAvailable, skills, search])

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters  />
        <SkillsFilters />

        <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={toggleModal} >
          <FiPlus />
        </button>
      </div>

      <SearchInput value={search} onChangeSearch={handleChangeSearch} onSearchReset={handleResetSearch} />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onSubmit={handleCreateNewUser} onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} />

    </>
  )
}

// export class Users extends Component {

//   state = {
//     users: [],
//     isModalOpen: false,
//     isAvailable: false,
//     skills: ALL_SKILLS_VALUE,
//     search: '',
//   };

//   getSnapshotBeforeUpdate() {
//     const snapshot = window.innerHeight;
//     return snapshot;
//   }

//   componentDidMount(_, _d, snapshot) {

//     const localData = localStorage.getItem(USERS_LOCALSTORAGE_KEY) ?? usersJson
//     if (localData) {
//       this.setState({ users: JSON.parse(localData) })
//     }
//   }

//   componentDidUpdate(_, prevState, snapshot) {
//     if (prevState.users.length !== this.state.users.length) {
//       localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(this.state.users))
//       console.log('componetDidUpdate');
//     }
//     console.log(snapshot);

//   }

//   handleChangeSkills = event => {
//     const { value } = event.target;
//     this.setState({ skills: value });
//   };

//   handleChangeAvailability = () => {
//     this.setState(prevState => ({ isAvailable: !prevState.isAvailable }));
//   };

//   handleChangeSearch = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleResetSearch = () => {
//     this.setState({ search: '' });
//   };

//   handleDeleteUser = userId => {
//     this.setState(prevState => ({
//       users: prevState.users.filter(user => user.id !== userId)
//     }));
//   };

//   handleCreateNewUser = user => {
//     this.setState(prevState => ({
//       users: [{ ...user, id: Date.now() }, ...prevState.users],
//       isModalOpen: false
//     }));
//   };

//   toggleModal = () => {
//     this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
//   };

//   applyFilters = () => {
//     const { users, search, skills, isAvailable } = this.state

//     return users.filter(({ isOpenToWork, skills: userSkills, name }) => {
//       if (isAvailable && !isOpenToWork) return false

//       if (skills !== ALL_SKILLS_VALUE && !userSkills.includes(skills)) return false

//       if (search && !name.toLowerCase().includes(search.toLowerCase())) return false

//       return true;
//     })
//   }

//   render() {
//     const { isAvailable, skills, search, isModalOpen } = this.state;

//     return (
//       <>
//         <div className="d-flex align-items-center mb-5">
//           <AvailabilityFilters value={isAvailable} onChangeAvailability={this.handleChangeAvailability} />
//           <SkillsFilters skill={skills} onChangeSkills={this.handleChangeSkills} />

//           <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={this.toggleModal}>
//             <FiPlus />
//           </button>
//         </div>

//         <SearchInput value={search} onResetSearch={this.handleResetSearch} onChangeSearch={this.handleChangeSearch} />

//         {isModalOpen && (
//           <Modal onModalClose={this.toggleModal}>
//             <NewUserForm onSubmit={this.handleCreateNewUser} onModalClose={this.toggleModal} />
//           </Modal>
//         )}

//         <UsersList users={this.applyFilters()} onDeleteUser={this.handleDeleteUser} />

//       </>
//     );
//   }
// }

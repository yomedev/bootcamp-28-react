import { Component } from 'react';

import { FiPlus } from 'react-icons/fi';

import usersJson from '../../assets/users.json';
// import { ConfettiContainer } from '../Confetti/Confetti';
import Modal from '../Modal/Modal';

import AvailabilityFilters from './components/AvailabilityFilters';
import NewUserForm from './components/NewUserForm';
import SearchInput from './components/SearchInput';
import SkillsFilters from './components/SkillsFilters';
import UsersList from './components/UsersList';

const ALL_SKILLS_VALUE = 'all';
const USERS_LOCALSTORAGE_KEY = 'users-key'

export class Users extends Component {

  state = {
    users: [],
    isModalOpen: false,
    isAvailable: false,
    skills: ALL_SKILLS_VALUE,
    search: '',
  };

  getSnapshotBeforeUpdate() {
    const snapshot = window.innerHeight;
    return snapshot; 
  }

  componentDidMount(_, _d, snapshot) {

    const localData = localStorage.getItem(USERS_LOCALSTORAGE_KEY)
    if (localData) {
      this.setState({ users: JSON.parse(localData) })
    }
  }

  componentDidUpdate(_, prevState, snapshot) {
    if (prevState.users.length !== this.state.users.length) {
      localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(this.state.users))
      console.log('componetDidUpdate');
    }
    console.log(snapshot);

  }

  handleChangeSkills = event => {
    const { value } = event.target;
    this.setState({ skills: value });
  };

  handleChangeAvailability = () => {
    this.setState(prevState => ({ isAvailable: !prevState.isAvailable }));
  };

  handleChangeSearch = event => {
    this.setState({ search: event.target.value });
  };

  handleResetSearch = () => {
    this.setState({ search: '' });
  };

  handleDeleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId)
    }));
  };

  handleCreateNewUser = user => {
    this.setState(prevState => ({
      users: [{ ...user, id: Date.now() }, ...prevState.users],
      isModalOpen: false
    }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  applyFilters = () => {
    const { users, search, skills, isAvailable } = this.state

    return users.filter(({ isOpenToWork, skills: userSkills, name }) => {
      if (isAvailable && !isOpenToWork) return false

      if (skills !== ALL_SKILLS_VALUE && !userSkills.includes(skills)) return false

      if (search && !name.toLowerCase().includes(search.toLowerCase())) return false

      return true;
    })
  }

  render() {
    const { isAvailable, skills, search, isModalOpen } = this.state;

    return (
      <>
        <div className="d-flex align-items-center mb-5">
          <AvailabilityFilters value={isAvailable} onChangeAvailability={this.handleChangeAvailability} />
          <SkillsFilters skill={skills} onChangeSkills={this.handleChangeSkills} />

          <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={this.toggleModal}>
            <FiPlus />
          </button>
        </div>

        <SearchInput value={search} onResetSearch={this.handleResetSearch} onChangeSearch={this.handleChangeSearch} />

        {isModalOpen && (
          <Modal onModalClose={this.toggleModal}>
            <NewUserForm onSubmit={this.handleCreateNewUser} onModalClose={this.toggleModal} />
          </Modal>
        )}

        <UsersList users={this.applyFilters()} onDeleteUser={this.handleDeleteUser} />

      </>
    );
  }
}

new Modal()
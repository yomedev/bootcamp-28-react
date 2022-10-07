import React, { Component } from 'react';
import usersJson from './assets/users.json';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Banner from './components/Banner/Banner';
import UsersList from './components/Users/UsersList';
import UserFilters from './components/UserFilters/UserFilters';
import LoginForm from './components/LoginForm/LoginForm';
import NotFound from './components/NotFound/NotFound';

class App extends Component {

  state = {
    users: usersJson,
    filter: {
      isAvailable: false,
      skills: '',
      search: ''
    }
  }

  handleDeleteUser = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter(user => user.id !== userId)
    }))
  }

  handleChangeAvailability = (event) => {
    const { checked } = event.target
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        isAvailable: checked,
      }
    }))
  }

  handleChangeSkills = (event) => {
    const { value } = event.target
    console.log(value);
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        skills: value
      }
    }))
  }

  handleChangeSearch = (event) => {
    const { value } = event.target
    console.log(value);
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        search: value
      }
    }))
  }

  handleSearchReset = () => {
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        search: ''
      }
    }))
  }

  applyFilters = () => {
    const { users, filter } = this.state
    const { search, skills, isAvailable } = filter

    // const availableUsers = isAvailable ? users.filter(({isOpenToWork}) => isOpenToWork) : users
    // const skilledUsers = skills ? availableUsers.filter(({skils}) => skils.includes(skills)) : availableUsers
    // const searchedUsers = search ? skilledUsers.filter(({name}) => name.toLowerCase().includes(search.toLowerCase())) : skilledUsers
    // return searchedUsers;

    return users.filter(({isOpenToWork, skils, name}) => {
      // Якщо ми використовуємо фільтрацію по пошуку і юзер не відкритий до роботи, то він не підходить і повертаємо false
      if (isAvailable && !isOpenToWork) return false
      // Якщо ми вибрали скіл, але в юзера його нема, то він не підходить і повертаємо false
      if (skills && !skils.includes(skills)) return false
      // Якщо ми написали запит на пошук, але в юзера не співпадає ім'я з запитом, то він не підходить і повертаємо false
      if (search && !name.includes(search)) return false
      // В інших випадках true
      return true;
    })


  }

  render() {
    const { users, filter } = this.state
    return (
      <Layout>
        <Header title="Hello world!" />

        {/* <LoginForm /> */}

        <UserFilters onSearchReset={this.handleSearchReset} onChangeSearch={this.handleChangeSearch} onChangeSkills={this.handleChangeSkills} filter={filter} onChangeAvailability={this.handleChangeAvailability} />
        <UsersList onDeleteUser={this.handleDeleteUser} users={this.applyFilters()} />
      </Layout>
    )
  }

}

export default App
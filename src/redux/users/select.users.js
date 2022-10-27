import { createSelector } from "@reduxjs/toolkit"

export const selectUsersList = state => state.users.data

export const selectUsersSearch = state => state.users.search

export const selectUsersIsModalOpen = state => state.users.isModalOpen

// export const selectFilteredUsers = state => {
//   const users = selectUsersList(state)
//   const search = selectUsersSearch(state)
//   console.log('hello');
//   return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
// }

export const selectFilteredUsers = createSelector([selectUsersList, selectUsersSearch], (users, search) => {
  return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
})

// export const selectUsersOpenToWorkTotal = state => {
//   const filteredUsers = selectFilteredUsers(state)
//   return filteredUsers.reduce((acc, user) => {
//     if (user.isOpenToWork) {
//       acc += 1
//     }

//     return acc
//   }, 0)
// }

export const selectUsersOpenToWorkTotal = createSelector(selectFilteredUsers, filteredUsers => {
  return filteredUsers.reduce((acc, user) => {
        if (user.isOpenToWork) {
          acc += 1
        }
    
        return acc
      }, 0)
})

/* 
operation = (a, b) => a + b
operation(1,3)
operation(1,2)
operation(1,2)

{
  param1: 1
  param2: 2
  result: 3
}
*/
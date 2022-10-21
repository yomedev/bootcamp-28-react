import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { usersInitialState } from "./initial-state.users";
import { DELETE_USER, TOGGLE_NEW_USER_MODAL, CREATE_USER, CHANGE_USERS_SEARCH, CHANGE_USERS_AVAILABILITY, CHANGE_USERS_SKILLS } from "./types.users";

// export const usersReducer = (state = usersInitialState, action) => {
//   switch (action.type) {
//     case TOGGLE_NEW_USER_MODAL:
//       return { ...state, isModalOpen: !state.isModalOpen }
//     case DELETE_USER:
//       return { ...state, data: state.data.filter(user => user.id !== action.payload) }
//     case CREATE_USER:
//       return { ...state, data: [action.payload, ...state.data] }
//     case CHANGE_USERS_SEARCH:
//       return { ...state, search: action.payload }
//     case CHANGE_USERS_AVAILABILITY:
//       return { ...state, isAvailable: !state.isAvailable }
//     case CHANGE_USERS_SKILLS:
//       return { ...state, skills: action.payload }
//     default:
//       return state
//   }

// }

const isModalOpenReducer = (state = usersInitialState.isModalOpen, action) => {
  switch (action.type) {
    case TOGGLE_NEW_USER_MODAL:
      return !state
    default:
      return state
  }
}

const usersDataReducer = (state = usersInitialState.data, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter(user => user.id !== action.payload)
    case CREATE_USER:
      return [action.payload, ...state]
    default:
      return state
  }
}

// storeState 
// reducer => storeState => newStoreState => storeState
// reducer => newState => newStoreState => storeState

// const filtersReducer = (state = usersInitialState.filters, action) => {
//   switch (action.type) {
//     case CHANGE_USERS_SEARCH:
//       return { ...state, search: action.payload }
//     case CHANGE_USERS_AVAILABILITY:
//       return { ...state, isAvailable: !state.isAvailable }
//     case CHANGE_USERS_SKILLS:
//       return { ...state, skills: action.payload }
//     default:
//       return state
//   }
// }

// export const usersReducer = combineReducers({
//   isModalOpen: isModalOpenReducer,
//   data: usersDataReducer,
//   // filters: filtersReducer
// })

export const createNewUserAction = createAction('users/createNewUserAction', (user) => ({
  payload: {
    ...user, id: Date.now()
  }
}))

// dispatch(createNewUserAction({val1, val2}))

const usersSlice = createSlice({
  initialState: usersInitialState,
  name: 'users',
  reducers: {
    deleteUserAction: (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload)
    },
    // createNewUserAction: (state, action) => {
    //   state.data.unshift(action.payload)
    //   state.isModalOpen = false
    // },
    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen
    },
    clearState: () => {
      return usersInitialState
    }
  },
  extraReducers: {
    [createNewUserAction]: (state, action) => {
      state.data.unshift(action.payload)
      state.isModalOpen = false
    }
  }
})
console.log(usersSlice);

export const usersReducer = usersSlice.reducer
// const {reducer: userReducer} = usersSlice
export const {deleteUserAction, toggleModalAction} = usersSlice.actions


// dispatch(createNewUserAction(user))
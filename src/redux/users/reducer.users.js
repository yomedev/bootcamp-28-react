import { usersInitialState } from "./initial-state.users";
import { DELETE_USER, TOGGLE_NEW_USER_MODAL, CREATE_USER, CHANGE_USERS_SEARCH, CHANGE_USERS_AVAILABILITY, CHANGE_USERS_SKILLS } from "./types.users";

export const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case TOGGLE_NEW_USER_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen }
    case DELETE_USER:
      return { ...state, data: state.data.filter(user => user.id !== action.payload) }
    case CREATE_USER:
      return { ...state, data: [action.payload, ...state.data] }
    case CHANGE_USERS_SEARCH:
      return { ...state, search: action.payload }
    case CHANGE_USERS_AVAILABILITY:
      return { ...state, isAvailable: !state.isAvailable }
    case CHANGE_USERS_SKILLS:
      return { ...state, skills: action.payload }
    default:
      return state
  }

}
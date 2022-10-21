import { DELETE_USER, TOGGLE_NEW_USER_MODAL, CREATE_USER, CHANGE_USERS_SEARCH, CHANGE_USERS_AVAILABILITY, CHANGE_USERS_SKILLS } from "./types.users";

export const toggleNewUserModalAction = () => ({ type: TOGGLE_NEW_USER_MODAL })

export const deleteUserAction = (userId) => ({ type: DELETE_USER, payload: userId })

export const createUserAction = (user) => (
  {
    type: CREATE_USER,
    payload: {
      ...user,
      id: Date.now()
    }
  }
)

export const changeUsersSearchAction = (value) => ({ type: CHANGE_USERS_SEARCH, payload: value })

export const changeUsersAvailabilityAction = () => ({ type: CHANGE_USERS_AVAILABILITY })

export const changeUsersSkillsAction = (value) => ({ type: CHANGE_USERS_SKILLS, payload: value })

// action => {type: 'test'}
// action creator => () => {type: 'test'}
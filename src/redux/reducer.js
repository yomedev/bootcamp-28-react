import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/slice.users";
import storage from 'redux-persist/lib/storage'
import { postsReducer } from "./posts/slice.posts";
import { postsApi } from "./rtk-posts/api.rtk-posts";
import { authReducer } from "./auth/slice.auth";
import { profileReducer } from "./profile/slice.profile";

const persistUsersConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
}

const persistAuthConfig = {
  key: 'auth',
  storage,
}

const persistedUsersReducer = persistReducer(persistUsersConfig, usersReducer)
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer)

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: persistedUsersReducer,
  posts: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer,
  auth: persistedAuthReducer,
  profile: profileReducer
})
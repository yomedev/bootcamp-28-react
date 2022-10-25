import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/slice.users";
import storage from 'redux-persist/lib/storage'
import { postsReducer } from "./posts/slice.posts";
import { postsApi } from "./rtk-posts/api.rtk-posts";

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
}

const persistedReducer = persistReducer(persistConfig, usersReducer)

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: persistedReducer,
  posts: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer
})
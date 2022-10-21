import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/slice.users";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
}

const persistedReducer = persistReducer(persistConfig, usersReducer)

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: persistedReducer
})
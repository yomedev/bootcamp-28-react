import { createStore } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import { initialState } from "./initial-state";
import { rootReducer } from "./reducer";
import { getPostsService } from "../services/postsService";

//import {thunk} from 'redux-thunk'

const thunk = (store) => {
  return (next) => {
    return (action) => {
      // console.log(action);
      if (typeof action === 'function') {
        return next(action(store.dispatch))
      }

      return next(action);
    }
  }
}

export const getPostsThunk = () => async (dispatch) => {
  dispatch({type: 'GET_POSTS_START'}) // isLoading: true
  try {
    const posts = await getPostsService()
    dispatch({type: 'GET_POSTS_SUCCESS', payload: posts}) // posts: posts, isLoading: false
  } catch (e) {
    dispatch({type: 'GET_POSTS_ERROR'}) // isError: true, isLoading: false
  }
}

// getPostsThunk => () => {}




export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

import { createAsyncThunk } from "@reduxjs/toolkit"
import { deletePostService, getPostsService } from "../../services/postsService"
import { deletePostErrorAction, deletePostLoadingAction, deletePostSuccessAction, getPostsErrorAction, getPostsLoadingAction, getPostsSuccessAction } from "./action.posts"

// action(store.dispatch)



// export const getPostsThunk = params => async dispatch => {
//   dispatch(getPostsLoadingAction())
//   try {
//     const posts = await getPostsService(params)
//     dispatch(getPostsSuccessAction(posts))
//   } catch (error) {
//     dispatch(getPostsErrorAction())
//   }
// }

export const getPostsThunk = createAsyncThunk('posts/getPosts', (params) => {
  return getPostsService(params)
})



// export const deletePostThunk = ({postId, params}) => async dispatch => {
//   dispatch(deletePostLoadingAction())
//   try {
//     await deletePostService(postId)
//     dispatch(deletePostSuccessAction())
//     dispatch(getPostsThunk(params))
//   } catch (error) {
//     dispatch(deletePostErrorAction())
//   }
// }

export const deletePostThunk = createAsyncThunk('posts/deletePosts', async ({postId, params}, {dispatch}) => {
  await deletePostService(postId)
  dispatch(getPostsThunk(params))
})

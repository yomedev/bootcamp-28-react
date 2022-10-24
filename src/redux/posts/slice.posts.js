import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../constants/fetch-status";
import { deletePostErrorAction, deletePostLoadingAction, deletePostSuccessAction, getPostsErrorAction, getPostsLoadingAction, getPostsSuccessAction } from "./action.posts";
import { postsInitialState } from "./initial-state.posts";
import { deletePostThunk, getPostsThunk } from "./thunk.posts";

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    // getPosts
    [getPostsThunk.pending]: state => {
      state.status = Status.LOADING
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.status = Status.SUCCESS
    },
    [getPostsThunk.rejected]: state => {
      state.status = Status.ERROR
    },
    // deletePost
    [deletePostThunk.pending]: state => {
      state.status = Status.LOADING
    },
    [deletePostThunk.fulfilled]: state => {
      state.status = Status.SUCCESS
    },
    [deletePostThunk.rejected]: state => {
      state.status = Status.ERROR
    },
  }
})

export const postsReducer = postsSlice.reducer
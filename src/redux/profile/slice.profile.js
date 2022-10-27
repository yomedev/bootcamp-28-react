import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../constants/fetch-status";
import { profileInitialState } from "./initial-state.profile";
import { getProfileThunk } from "./thunk.profile";

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: {
    [getProfileThunk.pending]: (state) => {
      state.status = Status.LOADING
    },
    [getProfileThunk.fulfilled]: (state, { payload }) => {
      state.status = Status.SUCCESS
      state.data = payload
    },
    [getProfileThunk.rejected]: (state) => {
      state.status = Status.ERROR
    }
  }
})

export const profileReducer = profileSlice.reducer
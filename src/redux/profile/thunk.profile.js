import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../../http/http";
import { getProfileService } from "../../services/usersService";
import { selectAuth } from "../auth/select.auth";

export const getProfileThunk = createAsyncThunk('profile/getProfile', async (_, { getState, rejectWithValue }) => {
  const auth = selectAuth(getState())
  if (!auth.access_token || !auth.token_type) {
    rejectWithValue()
  }
  token.set(auth.token_type + ' ' + auth.access_token)
  return await getProfileService()
})
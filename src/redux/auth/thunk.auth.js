import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../../http/http";
import { loginUserService } from "../../services/usersService";

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const data = await loginUserService(body)
  token.set(data.token_type + ' ' + data.access_token) // Bearer adlkfjajflajsdfj.asjdfasjdflds.asdjflkajsdlfj
  return data
})


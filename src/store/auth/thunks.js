import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from 'api/api';
import { logout, refresh, signIn, signUp } from 'api/auth';

export const signUpThunk = createAsyncThunk('auth/signUp', async (body, ThunkAPI) => {
  try {
    const res = await signUp(body);
    setToken(res.token);
    return res;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.response.data.message ?? error.message);
  }
});
export const signInThunk = createAsyncThunk('auth/signIn', async (body, ThunkAPI) => {
  try {
    const res = await signIn(body);
    // console.log(res);
    setToken(res.token);
    return res;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.response.data.message ?? error.message);
  }
});
export const logoutThunk = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    const res = await logout();
    return res;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.response.data.message ?? error.message);
  }
});
export const refreshThunk = createAsyncThunk('auth/refresh', async (_, ThunkAPI) => {
  try {
    const token = ThunkAPI.getState().auth.token;
    if (token) {
      setToken(token);
      const res = await refresh();
      return res;
    }
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.response.data.message ?? error.message);
  }
});
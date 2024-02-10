import { createSlice } from '@reduxjs/toolkit';
import { logoutThunk, refreshThunk, signInThunk, signUpThunk } from './thunks';

const initialState = {
  user: null,
  token: '',
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;

  state.isLoading = false;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(signUpThunk.rejected, handleRejected)
      .addCase(signInThunk.pending, handlePending)
      .addCase(signInThunk.fulfilled, handleFulfilled)
      .addCase(signInThunk.rejected, handleRejected)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, state => {
        state.user = null;
        state.token = '';
      })
      .addCase(logoutThunk.rejected, handleRejected)
      .addCase(refreshThunk.pending, handlePending)
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.user = payload;
        }
        state.isLoading = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.token = '';
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
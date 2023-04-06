import { createSlice } from '@reduxjs/toolkit';

import { fetchPostNewUser, fetchPostUserLogIn } from './operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPostNewUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostNewUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.isLogin = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(fetchPostNewUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchPostUserLogIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostUserLogIn.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.isLogin = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(fetchPostUserLogIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

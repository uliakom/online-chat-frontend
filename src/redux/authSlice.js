import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register, verifyMail, update } from './operation';

const handleUserEnter = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
  state.errorCode = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { username: null, email: null },
    token: null,
    error: null,
    errorCode: null,
    verifyErrorCode: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    resetErrors: state => {
      state.error = null;
      state.errorCode = null;
    },
    resetUser: state => {
      state.user = { name: null, email: null };
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload.user;
      })
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        // state.error = payload.message;
        // state.errorCode = payload.status;
      })
      .addCase(verifyMail.fulfilled, handleUserEnter)
      .addCase(verifyMail.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(verifyMail.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload?.message;
        state.verifyErrorCode = payload?.status;
      })
   .addCase(logIn.fulfilled, handleUserEnter)
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload?.message;
        state.errorCode = payload?.status;
      })
});

export const { resetErrors, resetUser, updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;

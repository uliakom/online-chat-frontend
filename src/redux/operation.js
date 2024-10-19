import { createAsyncThunk } from '@reduxjs/toolkit';

import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


import * as api from 'services/authApi';

export const register = createAsyncThunk('/register', async (credentials, thunkAPI) => {
  try {
      const data = await api.register(credentials);
       data.user &&
        Report.success('Success', 'Verification code sent to your email. Please verify an account.', 'Ok');
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    Report.failure(' Failure', `Something went wrong. Please try later.`, 'Ok');
      return thunkAPI.rejectWithValue(error);
  }
});

export const verifyMail = createAsyncThunk('/verify', async (credentials, thunkAPI) => {
  try {
    const data = await api.verifyMail(credentials);
    Report.success('Success', 'User is veryfied. Please login to your account.', 'Ok');
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const logIn = createAsyncThunk('/login', async (credentials, thunkAPI) => {
  try {
    const data = await api.logIn(credentials);
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    await api.logout();
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});
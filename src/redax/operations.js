import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
  postNewUser,
  userLogIn,
} from '../fetchData';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPostNewUser = createAsyncThunk(
  'auth/fetchPostNewUser',
  async (user, thunkAPI) => {
    try {
      return await postNewUser(user);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPostUserLogIn = createAsyncThunk(
  'auth/fetchPostUserLogIn',
  async (userData, thunkAPI) => {
    try {
      return await userLogIn(userData);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

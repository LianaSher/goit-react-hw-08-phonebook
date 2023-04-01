import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from '../redax/actions.js';

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContactsLoading]: state => {
      state.loading = true;
    },
    [fetchContactsSuccess]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.data;
    },
    [fetchContactsError]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchAddContactLoading]: state => {
      state.loading = true;
    },
    [fetchAddContactSuccess]: (state, { payload }) => {
      state.loading = false;
      state.items.push(payload);
    },
    [fetchAddContactError]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchDeleteContactLoading]: state => {
      state.loading = true;
    },
    [fetchDeleteContactSuccess]: (state, { payload }) => {
      state.loading = false;
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    },
    [fetchDeleteContactError]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

//export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

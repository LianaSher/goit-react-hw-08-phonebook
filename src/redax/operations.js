import { getContacts, addContact, deleteContact } from '../fetchData';

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
} from '../redax/actions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await getContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };

  return func;
};

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(fetchAddContactLoading());
      const result = await addContact(data);
      dispatch(fetchAddContactSuccess(result));
    } catch (error) {
      dispatch(fetchAddContactError(error.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchDeleteContactLoading());
      await deleteContact(id);
      dispatch(fetchDeleteContactSuccess(id));
    } catch (error) {
      dispatch(fetchDeleteContactError(error.message));
    }
  };
  return func;
};

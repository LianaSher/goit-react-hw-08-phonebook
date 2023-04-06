import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const data = await axios.get(`${BASE_URL}/contacts`);

  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post(`${BASE_URL}/contacts`, data);

  return result;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};

export const postNewUser = async user => {
  const { data } = await axios.post(`${BASE_URL}/users/signup`, user);
  console.log(data);
  return data;
};

export const userLogIn = async userData => {
  const { data } = await axios.post(`${BASE_URL}/users/login`, userData);
  console.log(data);
  return data;
};

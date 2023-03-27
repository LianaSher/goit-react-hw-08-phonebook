import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/setFilter');

export const deleteContact = createAction('contacts/deleteContact');

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid,
        name,
        number,
      },
    };
  }
);

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid,
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: id,
//   };
// };

// export const setFilter = text => {
//   return {
//     type: 'filter/setFilter',
//     payload: text,
//   };
// };

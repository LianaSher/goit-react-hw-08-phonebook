import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filterInitialState = { filter: '' };

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload);
  },
});

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return [...state, action.payload];
//     }

//     case 'contacts/deleteContact': {
//       return state.filter(({ id }) => id !== action.payload);
//     }

//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (_, action) => {
    return { filter: action.payload };
  },
});

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter': {
//       return { filter: action.payload };
//     }
//     default:
//       return state;
//   }
// };

// import { useState, useEffect } from 'react';

import { GlobalStyle } from 'GlobalStales';

import { Filter } from '../components/Filter/Filter';
import { Contacts } from '../components/Contacts/Contacts';
import { Form } from './Form/Form';

import { Container, Title } from './App.styled';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [state, key]);

//   return [state, setState];
// };

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Container>
  );
};

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'GlobalStales';

import { Filter } from '../components/Filter/Filter';
import { Contacts } from '../components/Contacts/Contacts';
import { Form } from './Form/Form';

import { Container, Title } from './App.styled';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('myContacts', []);
  const [filterValue, setFilterValue] = useState('');

  const isContactExist = newName => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });
  };

  const addContactToState = ({ name, number }) => {
    if (isContactExist(name)) {
      return alert(`${name} is already in Contacts`);
    }

    setContacts(prevContacts => {
      const newContact = { name, id: nanoid(), number };
      return [newContact, ...prevContacts];
    });
  };

  const filterHandle = ({ target }) => {
    setFilterValue(target.value);
  };

  const filterNames = () => {
    if (!filterValue) return contacts;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const filtredContacts = filterNames();

  const removeContact = idForDelete => {
    setContacts(contacts => {
      return contacts.filter(({ id }) => id !== idForDelete);
    });
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={addContactToState} />
      <Title>Contacts</Title>
      <Filter onChange={filterHandle} />
      {filtredContacts.length <= 0 ? (
        <p>There are no contacts yet</p>
      ) : (
        <Contacts contacts={filtredContacts} onClick={removeContact} />
      )}
      <GlobalStyle />
    </Container>
  );
};

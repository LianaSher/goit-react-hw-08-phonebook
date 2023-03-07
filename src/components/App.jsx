import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'GlobalStales';

import { Filter } from '../components/Filter/Filter';
import { Contacts } from '../components/Contacts/Contacts';
import { Form } from './Form/Form';

import { Container, Title } from './App.styled';

const initialContacts = () => {
  const savedContacts = JSON.parse(localStorage.getItem('myContacts'));
  if (savedContacts) {
    return savedContacts;
  } else {
    return [];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  const isContactExist = newName => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });
  };

  const addContactToState = ({ name, number }) => {
    setContacts(prevContacts => {
      if (isContactExist(name)) {
        return alert(`${name} is already in Contacts`);
      }
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
      const newContacts = contacts.filter(({ id }) => id !== idForDelete);
      return newContacts;
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

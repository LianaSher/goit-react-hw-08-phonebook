import { Item } from './ContactsItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redax/selectors';
//import { deleteContact } from 'redax/contactsSlice';
import { fetchAllContacts, fetchDeleteContact } from '../../redax/operations';

export const Contacts = () => {
  const contacts = useSelector(getContacts);

  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    if (!filter) return contacts.items;

    return contacts.items.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const contactsList = filteredContacts();

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return contactsList.length <= 0 ? (
    <p>There are no contacts yet</p>
  ) : (
    <ol>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <Item id={id} name={name} number={number} onClick={removeContact} />{' '}
        </li>
      ))}{' '}
    </ol>
  );
};

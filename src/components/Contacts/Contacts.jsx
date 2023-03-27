import { Item } from './ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redax/selectors';
import { deleteContact } from 'redax/contactsSlice';

export const Contacts = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return filteredContacts.length <= 0 ? (
    <p>There are no contacts yet</p>
  ) : (
    <ol>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Item id={id} name={name} number={number} onClick={removeContact} />{' '}
        </li>
      ))}{' '}
    </ol>
  );
};

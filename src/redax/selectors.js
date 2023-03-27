export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const { filter } = state.filter;

  if (!filter) return state.contacts;

  return state.contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
};

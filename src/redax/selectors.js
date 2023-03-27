export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const { filter } = state.filter;
  console.log(filter);
  console.log(state.contacts);
  if (!filter) return state.contacts;

  return state.contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
};

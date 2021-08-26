import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));
const deleteContact = createAction('contacts/delete');
const setFilter = createAction('contacts/filter');

const actions = { addContact, deleteContact, setFilter };
export default actions;

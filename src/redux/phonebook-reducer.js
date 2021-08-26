import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    state.find(savedContact => savedContact.name === payload.name)
      ? (alert(`${payload.name} is already in contacts`), [...state])
      : [...state, payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer('', {
  [actions.setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

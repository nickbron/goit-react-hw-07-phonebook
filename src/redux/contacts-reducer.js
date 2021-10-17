import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const reducerItems = createReducer([], {
  [actions.addItem]: (state, { payload }) => [...state, payload],
  [actions.removeItem]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const reducerFilter = createReducer('', {
  [actions.filterItem]: (_, { payload }) => payload,
});

export default combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});

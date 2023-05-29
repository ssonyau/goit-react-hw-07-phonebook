import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from 'slice';

const rootReducer = combineReducers({
  contactsStore: contactsReducer,
  filter: filterReducer,
  // contactsFromAPI: contactsFromApiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact_API, deleteContacts_API, getContacts_API } from 'API';

export const fetchContacts = createAsyncThunk('contactsFetchAll', () =>
  getContacts_API()
);
export const deleteContactByID = createAsyncThunk('deleteContactByID', id =>
  deleteContacts_API(id)
);
export const addContactOBJ = createAsyncThunk('addContactOBJ', contactObj =>
  addContact_API(contactObj)
);

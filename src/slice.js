import { addContactOBJ, deleteContactByID, fetchContacts } from 'operations';

const { createSlice } = require('@reduxjs/toolkit');
// const contactsInitialState = [];
const filterInitialState = '';

const contactsSlice = createSlice({
  name: 'contactsStore',
  initialState: { contacts: [], error: '', pending: false },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.pending = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.push(...action.payload);
        state.pending = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.error = 'Error occurred while fetching contacts.';
        state.pending = false;
      })
      .addCase(deleteContactByID.pending, state => {
        state.pending = true;
      })
      .addCase(deleteContactByID.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload.id
          ),
          pending: false,
        };
      })
      .addCase(deleteContactByID.rejected, state => {
        state.error = 'Error occurred while deleting contact.';
        state.pending = false;
      })
      .addCase(addContactOBJ.pending, state => {
        state.pending = true;
      })
      .addCase(addContactOBJ.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.pending = false;
      })
      .addCase(addContactOBJ.rejected, state => {
        state.error = 'Error occurred while adding contact.';
        state.pending = false;
      });
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilterRedux(state, action) {
      return action.payload;
    },
  },
});

export const { addContactRedux, removeContactRedux } = contactsSlice.actions;
export const { addFilterRedux } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
export 
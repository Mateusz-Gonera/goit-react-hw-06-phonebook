import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(6), name, number },
        };
      },
    },
    deleteContact(state, action) {
      let filtered = state.contacts.items.filter(
        item => item.id === action.payload
      );
      state.contacts.items = filtered;
    },
    handleFilter(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, handleFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      return [action.payload, ...state];
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;

// Selectors
export const getUsersList = (state) => state.contacts;

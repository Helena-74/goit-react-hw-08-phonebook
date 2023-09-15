import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: authReducer,
    // contacts: persistedContactsSlice,
    filter: filterReducer,
  },

});




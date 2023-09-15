import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';

import { authReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: authReducer,
    // contacts: persistedContactsSlice,
    filter: filterReducer,
  },

});




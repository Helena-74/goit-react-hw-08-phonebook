import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';

import { authReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: authReducer,
    // contacts: persistedContactsSlice,
    filter: filterReducer,
  },

});




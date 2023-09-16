import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/contactsSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './contacts/filterSlice';
// import { authReducer } from './auth/slice';
// import { contactsReducer } from './contacts/contactsSlice';
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import persistStore from 'redux-persist/es/persistStore';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['token'],
// };
// const persistedReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     auth: persistedReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);


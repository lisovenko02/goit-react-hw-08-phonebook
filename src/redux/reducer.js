import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  
 export const reducer = combineReducers({
      contacts: contactsReducer,
      filter: filterReducer,
      auth: persistReducer(persistConfig, authReducer),
    });

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import contactsReducer from './contacts-reducer';
//import { usersReducer } from './users/usersSlice';
import { contactApi } from './contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
export default store;

setupListeners(store.dispatch);

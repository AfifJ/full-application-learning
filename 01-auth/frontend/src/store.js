import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/Users/authSlice.js';
import { apiSlice } from './redux/apiSlice.js';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

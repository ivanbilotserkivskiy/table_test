'use client';

import { configureStore } from '@reduxjs/toolkit';
import authorizeReducer from './Features/authrize/authorizeSlice';

export const store = configureStore({
  reducer: {
    authorize: authorizeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
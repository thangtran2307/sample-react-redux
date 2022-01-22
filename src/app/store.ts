import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

/* eslint-disable */
import authReducer from '../components/Authentication/authSlice';
/* eslint-enable */

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

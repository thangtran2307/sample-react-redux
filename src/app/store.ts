import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

/* eslint-disable */
import UIReducer from '../components/Ui/uiSlice';
import authReducer from '../components/Authentication/authSlice';
/* eslint-enable */

export const store = configureStore({
  reducer: {
    ui: UIReducer,
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

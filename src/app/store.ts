import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

/* eslint-disable */
import uiReducer from '../components/Ui/uiSlice';
import authReducer from '../components/Authentication/authSlice';
import sampleReducer from '../components/Sample/sampleSlice';
/* eslint-enable */

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    sample: sampleReducer,
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

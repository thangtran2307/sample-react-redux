import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable */
import { RootState } from '../../app/store';
/* eslint-enable */

import { AuthState } from './authInterfaces';

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const { setIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;

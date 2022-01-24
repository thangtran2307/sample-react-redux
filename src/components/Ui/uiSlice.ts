import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable */
import { RootState } from '../../app/store';
/* eslint-enable */
import { ToggleLoadingScreen, UIState } from './uiInterfaces';

const initialState: UIState = {
  toggleLoadingScreen: {
    isShow: false,
    type: 'Common',
  },
};

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading: (state, action: PayloadAction<ToggleLoadingScreen>) => {
      state.toggleLoadingScreen = action.payload;
    },
  },
});

export const selectToggleLoadingScreen = (state: RootState) => state.ui.toggleLoadingScreen;

export const { toggleLoading } = UISlice.actions;

export default UISlice.reducer;

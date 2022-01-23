import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable-next-line */
import { RootState, AppThunk } from '../../app/store';
import { SampleDetail } from './sampleInterfaces';
/* eslint-disable-next-line */

const sampleDetail : SampleDetail = {
  id: '',
  fieldOne: '',
  fieldTwo: '',
};

const initialState = {
  sampleDetail,
};

export const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    clearState: () => initialState,
    updateSampleDetail: (
      state,
      action: PayloadAction<SampleDetail>,
    ) => {
      state.sampleDetail = action.payload;
    },
  },
});

// State selector
export const selectSampleDetail = (state: RootState) => state.sample.sampleDetail;

// Action states
export const {
  clearState,
  updateSampleDetail,
} = sampleSlice.actions;

export default sampleSlice.reducer;

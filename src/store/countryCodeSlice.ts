import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryCodeState {
  countryCode: string;
}

const initialState: CountryCodeState = {
     // Default to "IN" if not set
  countryCode: localStorage.getItem('countryCode') || 'IN',
};

const countryCodeSlice = createSlice({
  name: 'countryCode',
  initialState,
  reducers: {
    setCountryCode: (state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
      localStorage.setItem('countryCode', action.payload);
    },
  },
});

export const { setCountryCode } = countryCodeSlice.actions;

export default countryCodeSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryCodeState {
  countryCode: string;
}

const initialState: CountryCodeState = {
  countryCode: 'IN', // Set a default value for server-side rendering
};

const countryCodeSlice = createSlice({
  name: 'countryCode',
  initialState,
  reducers: {
    setCountryCode: (state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('countryCode', action.payload);
      }
    },
    loadCountryCodeFromLocalStorage: (state) => {
      // Safely access localStorage only in the browser
      if (typeof window !== 'undefined') {
        const storedCode = localStorage.getItem('countryCode');
        if (storedCode) {
          state.countryCode = storedCode;
        }
      }
    },
  },
});

export const { setCountryCode, loadCountryCodeFromLocalStorage } = countryCodeSlice.actions;
export default countryCodeSlice.reducer;

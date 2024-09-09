import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    error: string | null;
    user: { name: string } | null;
}

// Define the initial state
const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    error: null,
    user: null,
};

// Check if window is defined (i.e., code is running on the client side)
if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('data');
    if (storedData) {
        try {
            const parsedData = JSON.parse(storedData);
            initialState.isAuthenticated = true;
            initialState.token = parsedData.token;
            initialState.user = parsedData.user;
        } catch (error) {
            console.error("Failed to parse stored authentication data:", error);
        }
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string; user: { name: string } }>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.error = null;
            if (typeof window !== 'undefined') {
                localStorage.setItem('data', JSON.stringify(action.payload));
            }
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.error = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('data');
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.error = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('data');
            }
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

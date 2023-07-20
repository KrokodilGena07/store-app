import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    error: string;
    isLoading: boolean;
}

const initialState: AuthState = {
    isAuth: JSON.parse(localStorage.getItem('isAuth') || 'false'),
    error: '',
    isLoading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
            state.error = '';
        }
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
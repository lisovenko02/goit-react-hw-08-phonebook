import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register } from './operations';

const handleFulfilled = (state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, handleFulfilled)
            .addCase(login.fulfilled, handleFulfilled)
            .addCase(logOut.fulfilled, (state) => {
                state.user = { username: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
              })
            .addCase(refreshUser.pending, ({isRefreshing}) => {
                isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, ({isRefreshing}) => {
                isRefreshing = false;
            })
    }
});

export const authReducer = authSlice.reducer;
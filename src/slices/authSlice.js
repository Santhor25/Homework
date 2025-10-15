import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = 'authenticated';
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
    setAuthLoading: (state) => {
      state.status = 'loading';
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
  },
});

export const {
  setUser,
  logout,
  setAuthLoading,
  setAuthError, 
} = authSlice.actions;

export default authSlice.reducer;

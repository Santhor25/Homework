import { createSlice } from '@reduxjs/toolkit';

const directMessagesSlice = createSlice({
  name: 'directMessages',
  initialState: [],
  reducers: {
    setDirectMessages: (state, action) => action.payload,
  },
});

export const { setDirectMessages } = directMessagesSlice.actions;
export default directMessagesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const messageQueueSlice = createSlice({
  name: 'messageQueue',
  initialState: [],
  reducers: {
    addMessageToQueue: (state, action) => {
      state.push(action.payload);
    },
    removeMessageFromQueue: (state) => {
      state.shift();
    },
    clearQueue: () => []
  }
});

export const {
  addMessageToQueue,
  removeMessageFromQueue,
  clearQueue
} = messageQueueSlice.actions;

export default messageQueueSlice.reducer;

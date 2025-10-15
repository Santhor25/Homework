import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    setMessages: (state, action) => action.payload,
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    removeMessage: (state, action) => {
      return state.filter(message => message.id !== action.payload);
    },
    clearMessages: () => []
  }
});

export const {
  setMessages,
  addMessage,
  removeMessage,
  clearMessages
} = messagesSlice.actions;

export default messagesSlice.reducer;

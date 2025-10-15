import { configureStore } from '@reduxjs/toolkit';

import messagesReducer from './slices/messagesSlice';
import notificationsReducer from './slices/notificationSlice';
import messageQueueReducer from './slices/messageQueueSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    notifications: notificationsReducer,
    messageQueue: messageQueueReducer,
    auth: authReducer
  },
});

export default store;

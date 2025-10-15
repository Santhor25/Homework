import { addMessageToQueue, removeMessageFromQueue } from '../slices/messageQueueSlice';

export const enqueueMessage = (message) => async (dispatch) => {
  try {
    dispatch(addMessageToQueue(message));
  } catch (error) {
    console.error("Error adding message to queue:", error);
  }
};

export const dequeueMessage = () => async (dispatch) => {
  try {
    dispatch(removeMessageFromQueue());
  } catch (error) {
    console.error("Error removing message from queue:", error);
  }
};

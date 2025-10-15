
import { setMessages, addMessage, removeMessage } from '../slices/messagesSlice';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { ref, push } from 'firebase/database';
import { createNotification } from './notificationThunks';
import { db, rtdb, auth } from '../firebase/config';

export const fetchMessages = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    dispatch(setMessages(messages)); 
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

export const createMessage = (message) => async (dispatch) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    const senderName = user.displayName || user.email;
    const senderEmail = user.email;

    const fullMessage = {
      ...message,
      senderName,
      senderEmail,
      timestamp: new Date().toISOString(),
    };

    const messagesRef = ref(rtdb, 'messages');
    const newRef = await push(messagesRef, fullMessage);

    await addDoc(collection(db, 'messages'), fullMessage);

    dispatch(addMessage({ id: newRef.key, ...fullMessage }));

    dispatch(createNotification(`${senderName} ha publicado un mensaje`));
  } catch (error) {
    console.error('Error al guardar mensaje:', error);
  }
};
export const deleteMessage = (messageId) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "messages", messageId));
    dispatch(removeMessage(messageId));
  } catch (error) {
    console.error("Error deleting message:", error);
  }
};

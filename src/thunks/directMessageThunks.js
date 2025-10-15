import { ref, push, onValue } from 'firebase/database';
import { rtdb } from '../firebase/config';
import { auth } from '../firebase/config';
import { setDirectMessages } from '../slices/directMessagesSlice';

function sanitizeEmail(email) {
  return email.replace(/\./g, '_');
}

export const sendDirectMessage = (toEmail, messageText) => async () => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    const fromEmail = user.email;
    const toKey = sanitizeEmail(toEmail);

    const message = {
      from: fromEmail,
      to: toEmail,
      content: messageText,
      timestamp: new Date().toISOString()
    };

    const dmRef = ref(rtdb, `directMessages/${toKey}`);
    await push(dmRef, message);

    console.log("Mensaje enviado");
  } catch (error) {
    console.error("Error enviando mensaje directo:", error);
  }
};

export const fetchDirectMessages = () => (dispatch) => {
  const user = auth.currentUser;
  if (!user) return;

  const userKey = sanitizeEmail(user.email);
  const dmRef = ref(rtdb, `directMessages/${userKey}`);

  onValue(dmRef, (snapshot) => {
    const data = snapshot.val();
    const messages = [];

    for (let id in data) {
      messages.push({ id, ...data[id] });
    }

    dispatch(setDirectMessages(messages));
  });
};
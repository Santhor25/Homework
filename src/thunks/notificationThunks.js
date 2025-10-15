import { db, rtdb } from '../firebase/config';
import { collection, addDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { ref, push, onValue, remove } from 'firebase/database';
import { setNotifications, addNotification, removeNotification } from '../slices/notificationSlice';


export const createNotification = (text) => async (dispatch) => {
  try {
    const newNotification = {
      text,
      timestamp: new Date().toISOString()
    };

    const notificationsRefRTDB = ref(rtdb, 'notifications');
    const newRefRTDB = await push(notificationsRefRTDB, newNotification);

    const docRef = await addDoc(collection(db, 'notifications'), newNotification);

    dispatch(addNotification({ id: newRefRTDB.key, ...newNotification }));
  } catch (error) {
    console.error('Error al guardar notificación en Firebase:', error);
  }
};


export const deleteNotification = () => async (dispatch, getState) => {
  const { notifications } = getState();

  if (!Array.isArray(notifications) || notifications.length === 0) return;

  const last = notifications[notifications.length - 1];

  if (!last || !last.id) {
    console.error('Notificación no válida, falta id');
    return;
  }

  try {

    await remove(ref(rtdb, `notifications/${last.id}`));


    await deleteDoc(doc(db, 'notifications', last.id));


    dispatch(removeNotification());
  } catch (error) {
    console.error('Error al eliminar notificación de Firebase:', error);
  }
};


export const fetchNotifications = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'notifications'));
    const notifications = [];
    querySnapshot.forEach((doc) => {
      notifications.push({ id: doc.id, ...doc.data() });
    });
    dispatch(setNotifications(notifications));
  } catch (error) {
    console.error('Error al obtener notificaciones de Firestore:', error);
  }
};


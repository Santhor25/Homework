import { setAuthLoading, setAuthError, setUser, logout } from '../slices/authSlice';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setAuthLoading()); 

   
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    dispatch(setUser(userData)); 
  } catch (error) {
    dispatch(setAuthError(error.message)); 
  }
};

export const register = (email, password, nombre) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: nombre,
    });

    await user.reload();

    dispatch(setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }));
  } catch (error) {
    console.error('Error al registrar:', error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout()); 
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};

export const checkAuthStatus = () => (dispatch) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }));
    } else {
      dispatch(logout());
    }
  });

  return unsubscribe;
};


  

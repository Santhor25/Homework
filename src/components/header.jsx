import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../thunks/authThunks';

function Header() {
  const dispatch = useDispatch();
  const notificationCount = useSelector(state => state.notifications.length);
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header style={{ padding: 10, backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h3>📘 Red Social UAO</h3>
      <div>
        {user && (
          <>
            <span>🔔 Notificaciones: {notificationCount}</span>
            <button onClick={handleLogout} style={{ marginLeft: 10 }}>Cerrar sesión</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

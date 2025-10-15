import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../thunks/authThunks';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };

  React.useEffect(() => {
    if (status === 'authenticated') {
      navigate('/home'); 
    }
  }, [status, navigate]);

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <button type="submit" style={{ width: '100%' }}>
          Iniciar sesión
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} 
    </div>
  );
}

export default Login;

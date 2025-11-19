import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.scss";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/app");
  };

  return (
    <div className={styles.welcomeContainer}>
      <header className={styles.header}>
        <h1>Estructura de Datos Y Algoritmos 2</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.floatingBox}>
          <h2>Aplicación de Ciudades</h2>
          <button className={styles.startButton} onClick={handleStart}>
            Comenzar
          </button>
        </div>
      </div>

      <footer className={styles.footer}>Desarrollado por Santiago Torralba Alape</footer>
    </div>
  );
}

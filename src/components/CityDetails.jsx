import { useState } from "react";
import { totalZones, maxHeight } from "../utils/calculations";
import GreenZoneTree from "./GreenZoneTree";
import GreenZoneForm from "./GreenZoneForm";
import { useCityGraph } from "../context/CityGraphContext";
import styles from "./CityDetails.module.scss";

export default function CityDetails({ city, onDelete }) {
  const { deleteCity } = useCityGraph();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteCity(city.id);
    if (onDelete) onDelete();
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <div className={styles.container}>
        <h2>{city.name}</h2>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Eliminar ciudad
        </button>

        <p><strong>Conexiones:</strong> {city.connections.length}</p>

        <div className={styles.stats}>
          <p>Altura máxima: {maxHeight(city.greenZones)}</p>
          <p>Total zonas: {totalZones(city.greenZones)}</p>
        </div>

        <GreenZoneForm city={city} />

        <GreenZoneTree zones={city.greenZones} cityId={city.id} />
      </div>

      {showConfirm && (
        <div className={styles.overlay}>
          <div className={`${styles.modal} ${styles.open}`}>
            <h3>¿Seguro que quieres eliminar "{city.name}"?</h3>
            <div className={styles.modalButtons}>
              <button className={styles.cancelButton} onClick={cancelDelete}>
                Cancelar
              </button>
              <button className={styles.confirmButton} onClick={confirmDelete}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

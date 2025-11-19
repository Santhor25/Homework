import { useState } from "react";
import { useCityGraph } from "../context/CityGraphContext";
import styles from "./CityForm.module.scss";

export default function CityForm() {
  const [name, setName] = useState("");
  const { addCity } = useCityGraph();

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Nombre ciudad"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button
        className={styles.button}
        onClick={() => {
          if (name.trim()) addCity(name);
          setName("");
        }}
      >
        Agregar Ciudad
      </button>
    </div>
  );
}

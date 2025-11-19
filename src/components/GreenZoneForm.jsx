import { useState } from "react";
import { useCityGraph } from "../context/CityGraphContext";
import styles from "./GreenZoneForm.module.scss";

export default function GreenZoneForm({ city }) {
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const { addGreenZoneToCity } = useCityGraph();

  const flattenZones = (zones) =>
    zones.flatMap(z => [
      z,
      ...flattenZones(z.subzones)
    ]);

  const allZones = flattenZones(city.greenZones);

  return (
    <div className={styles.wrapper}>
      <h4>Agregar Zona Verde</h4>

      <div className={styles.row}>
        <input
          className={styles.input}
          placeholder="Nombre zona"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <select
          className={styles.select}
          value={parent}
          onChange={e => setParent(e.target.value)}
        >
          <option value="">(zona raíz)</option>
          {allZones.map(z => (
            <option key={z.id} value={z.id}>{z.name}</option>
          ))}
        </select>

        <button
          className={styles.button}
          onClick={() => {
            if (name.trim()) {
              addGreenZoneToCity(city.id, parent || null, name);
              setName("");
              setParent("");
            }
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

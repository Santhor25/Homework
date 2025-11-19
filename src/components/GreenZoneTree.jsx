import { useState } from "react";
import { useCityGraph } from "../context/CityGraphContext";
import styles from "./GreenZoneTree.module.scss";

export default function GreenZoneTree({ zones, cityId }) {
    const { graph, moveGreenZone } = useCityGraph();
    const [selectedZone, setSelectedZone] = useState(null);
    const [targetCityId, setTargetCityId] = useState(cityId);
    const [targetParentId, setTargetParentId] = useState(null);

    const renderZones = (zones) => {
        return (
            <ul>
                {zones.map(zone => (
                    <li key={zone.id}>
                        <span>{zone.name}</span>
                        <button onClick={() => setSelectedZone(zone)}>Mover / Cambiar padre</button>

                        {zone.subzones?.length > 0 && renderZones(zone.subzones)}
                    </li>
                ))}
            </ul>
        );
    };

    const handleMove = () => {
        if (!selectedZone) return;
        if (!cityId) {
            console.error("Ciudad origen no definida");
            return;
        }
        if (!graph[targetCityId]) {
            alert("Ciudad destino inválida");
            return;
        }
        moveGreenZone(selectedZone.id, cityId, targetCityId, targetParentId || null);
        setSelectedZone(null);
        setTargetParentId(null);
        setTargetCityId(cityId);
    };
    

    const flattenZones = (zones) => {
        let result = [];
        zones.forEach(z => {
            result.push(z);
            if (z.subzones?.length) {
                result = result.concat(flattenZones(z.subzones));
            }
        });
        return result;
    };

    const parentOptions = targetCityId ? flattenZones(graph[targetCityId]?.greenZones || []) : [];

    return (
        <div className={styles.container}>
            {renderZones(zones)}

            {selectedZone && (
                <div className={styles.modal}>
                    <h4>Mover zona: {selectedZone.name}</h4>

                    <label>
                        Ciudad destino:
                        <select
                            value={targetCityId}
                            onChange={e => setTargetCityId(e.target.value)}
                        >
                            {Object.values(graph).map(c => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Nuevo padre (opcional):
                        <select
                            value={targetParentId || ""}
                            onChange={e => setTargetParentId(e.target.value || null)}
                        >
                            <option value="">-- raíz --</option>
                            {parentOptions.map(z => (
                                <option key={z.id} value={z.id}>{z.name}</option>
                            ))}
                        </select>
                    </label>

                    <div className={styles.modalButtons}>
                        <button onClick={handleMove}>Mover</button>
                        <button onClick={() => setSelectedZone(null)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

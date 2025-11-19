import { createContext, useContext, useState } from "react";
import { addZone, editZone } from "../utils/greenZones";

const CityGraphContext = createContext(null);
export const useCityGraph = () => useContext(CityGraphContext);

export const CityGraphProvider = ({ children }) => {
  const [graph, setGraph] = useState({});

  const addCity = (name) => {
    const id = crypto.randomUUID();
    setGraph(g => {
      const newCity = { id, name, connections: [], greenZones: [] };
      const updatedGraph = { ...g, [id]: newCity };

      Object.values(updatedGraph).forEach(city => {
        if (city.id !== id) {
          if (!city.connections.includes(id)) city.connections.push(id);
          if (!newCity.connections.includes(city.id)) newCity.connections.push(city.id);
        }
      });

      return updatedGraph;
    });
  };

  const deleteCity = (id) => {
    setGraph(g => {
      const copy = { ...g };
      delete copy[id];

      Object.values(copy).forEach(c => {
        c.connections = c.connections.filter(con => con !== id);
      });

      return copy;
    });
  };

  const connectCities = (id1, id2) => {
    setGraph(g => ({
      ...g,
      [id1]: { ...g[id1], connections: [...new Set([...g[id1].connections, id2])] },
      [id2]: { ...g[id2], connections: [...new Set([...g[id2].connections, id1])] }
    }));
  };

  const addGreenZoneToCity = (cityId, parentId, name) => {
    if (!graph[cityId]) return;
    setGraph(g => ({
      ...g,
      [cityId]: {
        ...g[cityId],
        greenZones: addZone(g[cityId].greenZones || [], parentId, name)
      }
    }));
  };

  const editGreenZoneInCity = (cityId, zoneId, newName) => {
    if (!graph[cityId]) return;
    setGraph(g => ({
      ...g,
      [cityId]: {
        ...g[cityId],
        greenZones: editZone(g[cityId].greenZones || [], zoneId, newName)
      }
    }));
  };

  const moveGreenZone = (zoneId, fromCityId, toCityId, newParentId = null) => {
    setGraph(g => {
      const copy = { ...g };

      if (!copy[fromCityId]) {
        console.error("Ciudad origen no encontrada:", fromCityId);
        return copy;
      }
      if (!copy[toCityId]) {
        console.error("Ciudad destino no encontrada:", toCityId);
        return copy;
      }

      copy[fromCityId].greenZones = copy[fromCityId].greenZones || [];
      copy[toCityId].greenZones = copy[toCityId].greenZones || [];

      let zoneToMove;

      const removeZone = (zones) => {
        return zones.filter(z => {
          if (z.id === zoneId) {
            zoneToMove = z;
            return false;
          }
          if (z.subzones?.length) {
            z.subzones = removeZone(z.subzones);
          }
          return true;
        });
      };

      copy[fromCityId].greenZones = removeZone(copy[fromCityId].greenZones);

      if (!zoneToMove) {
        console.warn("Zona verde no encontrada:", zoneId);
        return copy;
      }

      const addZoneToParent = (zones, parentId) => {
        return zones.map(z => {
          if (z.id === parentId) {
            z.subzones = z.subzones || [];
            z.subzones.push(zoneToMove);
          } else if (z.subzones?.length) {
            z.subzones = addZoneToParent(z.subzones, parentId);
          }
          return z;
        });
      };

      if (newParentId) {
        copy[toCityId].greenZones = addZoneToParent(copy[toCityId].greenZones, newParentId);
      } else {
        copy[toCityId].greenZones.push(zoneToMove);
      }

      return copy;
    });
  };

  return (
    <CityGraphContext.Provider value={{
      graph,
      addCity,
      deleteCity,
      connectCities,
      addGreenZoneToCity,
      editGreenZoneInCity,
      moveGreenZone
    }}>
      {children}
    </CityGraphContext.Provider>
  );
};

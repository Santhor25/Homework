export const addZone = (zones, parentId, name) => {
    if (!parentId) {
      return [...zones, { id: crypto.randomUUID(), name, subzones: [] }];
    }
  
    return zones.map(zone => {
      if (zone.id === parentId) {
        return {
          ...zone,
          subzones: [
            ...zone.subzones,
            { id: crypto.randomUUID(), name, subzones: [] }
          ]
        };
      }
      return {
        ...zone,
        subzones: addZone(zone.subzones, parentId, name)
      };
    });
  };
  
  export const editZone = (zones, zoneId, newName) => {
    return zones.map(zone => {
      if (zone.id === zoneId) return { ...zone, name: newName };
      return { ...zone, subzones: editZone(zone.subzones, zoneId, newName) };
    });
  };
  
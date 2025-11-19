export const greenZoneHeight = (zone) => {
    if (!zone.subzones.length) return 1;
    return 1 + Math.max(...zone.subzones.map(greenZoneHeight));
  };
  
  export const maxHeight = (zones) => {
    if (!zones.length) return 0;
    return Math.max(...zones.map(greenZoneHeight));
  };
  
  export const countZones = (zone) =>
    1 + zone.subzones.reduce((acc, z) => acc + countZones(z), 0);
  
  export const totalZones = (zones) =>
    zones.reduce((acc, z) => acc + countZones(z), 0);
  
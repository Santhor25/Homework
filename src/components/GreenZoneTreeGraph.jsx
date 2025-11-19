import Tree from "react-d3-tree";
import styles from "./GreenZoneTreeGraph.module.scss";

export default function GreenZoneTreeGraph({ zones }) {
  if (!zones || zones.length === 0) {
    return <p>No hay zonas verdes</p>;
  }

  const convert = (zone) => ({
    name: zone.name,
    children: zone.subzones.map(convert)
  });

  const data =
    zones.length === 1
      ? convert(zones[0])
      : { name: "Zonas Verdes", children: zones.map(convert) };

  return (
    <div className={styles.treeContainer}>
      <Tree
        data={data}
        orientation="vertical"
        pathFunc="diagonal"
        translate={{ x: 300, y: 50 }}
        collapsible={false}
      />
    </div>
  );
}

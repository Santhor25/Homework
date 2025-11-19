  import ForceGraph2D from "react-force-graph-2d";
  import styles from "./CityGraphView.module.scss";

  export default function CityGraphView({ graph, onSelectCity }) {
    const nodes = Object.values(graph).map(city => ({
      id: city.id,
      name: city.name
    }));

    const links = [];
    Object.values(graph).forEach(city => {
      city.connections.forEach(conn => {
        if (city.id < conn) {
          links.push({ source: city.id, target: conn });
        }
      });
    });

    return (
      <div className={styles.container}>
        <ForceGraph2D
          graphData={{ nodes, links }}
          nodeLabel="name"
          nodeAutoColorBy="id"
          onNodeClick={node => onSelectCity(node.id)}
        />
      </div>
    );
  }

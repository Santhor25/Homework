import React from "react";
import { Graph } from "react-d3-graph";

const GraphView = ({ people, cities }) => {
  const nodes = [
    ...cities.map((c) => ({ id: c.id, color: "lightblue" })),
    ...people.map((p) => ({ id: p.id, color: "orange" })),
  ];

  const links = people.map((p) => ({
    source: p.id,
    target: p.city,
  }));

  const data = { nodes, links };

  const config = {
    nodeHighlightBehavior: true,
    height: 600,
    width: 700,  
    node: {
      color: "lightgreen",
      size: 350,
      highlightStrokeColor: "blue",
      labelProperty: "id",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  return <Graph id="graph" data={data} config={config} />;
};

export default GraphView;

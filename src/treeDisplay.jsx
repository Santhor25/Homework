import React, { useMemo, useRef, useEffect, useState } from 'react';
import Tree from 'react-d3-tree';

const transformTree = (node) => {
  if (!node) return null;
  const transformed = {
    name: String(node.valor),
    children: []
  };
  if (node.izquierda) transformed.children.push(transformTree(node.izquierda));
  if (node.derecha) transformed.children.push(transformTree(node.derecha));
  return transformed;
};

const TreeDisplay = ({ root }) => {
  const data = useMemo(() => transformTree(root), [root]);
  const treeWrapperRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (treeWrapperRef.current) {
      const dimensions = treeWrapperRef.current.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: 100,
      });
    }
  }, [root]);

  if (!root) return <p className="empty-tree">El árbol aparecerá aquí</p>;

  return (
    <div
      id="treeWrapper"
      ref={treeWrapperRef}
      style={{
        width: '100%',
        height: '80vh',
        minHeight: '500px',
        overflow: 'auto',
        border: '1px solid #ddd',
        borderRadius: '10px',
        background: '#fafafa',
        padding: '10px',
      }}
    >
      <Tree
        data={data}
        orientation="vertical"
        translate={translate}
        pathFunc="elbow"
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        zoomable={true}
        collapsible={false}
      />
    </div>
  );
};

export default TreeDisplay;

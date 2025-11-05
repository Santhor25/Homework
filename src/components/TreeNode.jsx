import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TreeNode({ node, level }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleClick = () => {
    if (hasChildren) setExpanded(!expanded);
  };

  return (
    <div style={{ marginLeft: `${level * 16}px`, marginBottom: "4px" }}>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: hasChildren ? "pointer" : "default",
          padding: "6px 8px",
          borderRadius: "6px",
          transition: "background 0.2s ease",
          backgroundColor: expanded ? "#f3f4f6" : "transparent",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = expanded ? "#f3f4f6" : "transparent")
        }
      >
        {hasChildren && (
          <span
            style={{
              display: "inline-block",
              width: "20px",
              textAlign: "center",
              color: "#6b7280",
              transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            ▶
          </span>
        )}
        {!hasChildren && <span style={{ width: "20px" }}></span>}
        {hasChildren ? (
          <span style={{ userSelect: "none" }}>{node.title}</span>
        ) : (
          <Link
            to={node.link}
            style={{
              textDecoration: "none",
              color: "#111827",
              flex: 1,
            }}
          >
            {node.title}
          </Link>
        )}
      </div>

      {expanded && hasChildren && (
        <div style={{ marginTop: "4px" }}>
          {node.children.map((child, i) => (
            <TreeNode key={i} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

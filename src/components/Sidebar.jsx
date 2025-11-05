import React from "react";
import TreeNode from "./TreeNode";

const menuTree = [
  {
    title: "Ayuda",
    children: [
      { title: "Contactarnos", link: "/help/contact" },
      { title: "FAQ's", link: "/help/faq" },
    ],
  },
  {
    title: "Perfil",
    children: [
      { title: "Configuración", link: "/profile/settings" },
      { title: "Seguridad", link: "/profile/security" },
      { title: "Actividad", link: "/profile/activity" },
    ],
  },
  {
    title: "Home",
    children: [
      { title: "Acerca de nosotros", link: "/home/about" },
      { title: "Servicios", link: "/home/services" },
    ],
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "280px",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <h2 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>
        Menú
      </h2>
      {menuTree.map((node, index) => (
        <TreeNode key={index} node={node} level={0} />
      ))}
    </div>
  );
}

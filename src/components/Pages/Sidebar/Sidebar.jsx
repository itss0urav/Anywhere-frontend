import styles from './Sidebar.module.css';
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
  ]);

  useEffect(() => {
    document.querySelectorAll("li").forEach((item) => {
      item.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "lightblue";
      });
      item.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "";
      });
    });
  });

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Users</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
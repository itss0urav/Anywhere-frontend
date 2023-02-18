import styles from "./Sidebar.module.css";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Obama" },
    { id: 2, name: "Robert Downey Jr" },
    { id: 3, name: "Will Smith" },
  ]);
  
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebartitle}>Users</h2>
      <ul className={styles.userlist}>
        {users.map((user) => (
          <li key={user.id} className={styles.wrapper}>
            {user.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import styles from "./Categories.module.css";

const Categories = () => (
  <div className={styles.categorylist}>
    <h2 className={styles.categorylisttitle}>Categories</h2>
    {/* <ul className={styles.categorylistitems}>
      {categories.map((category) => (
        <li key={category.id} className={styles.categorylistitem}>{category.name}</li>
      ))}
    </ul> */}
  </div>
);

export default Categories;

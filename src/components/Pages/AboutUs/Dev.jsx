import React from 'react';
import styles from './Dev.module.css';

function Developer(props) {
  const { photo, name, title } = props;
  return (
    <div className="developer">
      <img className={styles.image} src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

export default Developer;

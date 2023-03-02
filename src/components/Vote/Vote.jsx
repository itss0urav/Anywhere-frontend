import React, { useState } from "react";
import styles from "./Vote.module.css";

const Vote = ({vote}) => {
 
  


  return (
    <div className={styles.voteContainer}>
      <i className="fa-solid fa-arrow-up" ></i>
      <span className={styles.voteCount}>{vote.vote}</span>
      <i className="fa-solid fa-arrow-down"></i>
    </div>
  );
};

export default Vote;

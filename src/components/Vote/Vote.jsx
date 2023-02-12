import React, { useState } from "react";
import styles from "./Vote.module.css";

const Vote = () => {
  const [voteCount, setVoteCount] = useState(0);

  const handleUpvote = () => {
    setVoteCount(voteCount + 1);
  };

  const handleDownvote = () => {
    setVoteCount(voteCount - 1);
  };

  return (
    <div className={styles.voteContainer}>
      <i className="fa-solid fa-arrow-up" onClick={handleUpvote}></i>
      <span className={styles.voteCount}>{voteCount}</span>
      <i className="fa-solid fa-arrow-down" onClick={handleDownvote}></i>
    </div>
  );
};

export default Vote;

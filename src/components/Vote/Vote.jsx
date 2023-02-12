import React, { useState } from 'react';
import styles from './Vote.module.css';

const Vote = () => {
  const [voteCount, setVoteCount] = useState(0);

  const handleUpvote = () => {
    setVoteCount(voteCount + 1);
  };

  const handleDownvote = () => {
    setVoteCount(voteCount - 1);
  };

  return (
    <div className={styles.vote-container}>
      <i className="fa-solid fa-arrow-up"></i>
      <span className={styles.vote-count}>{voteCount}</span>
      <i className="fa-solid fa-arrow-down"></i>
    </div>
  );
};

export default Vote;

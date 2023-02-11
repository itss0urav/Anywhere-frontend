import React from 'react';
import styles from './User.module.css';

const UserProfile = ({ name, totalPosts, votes, timeOfAccountCreation }) => {
  return (
    <div className={styles.wrappper}>
    <div className="user-profile">
      <h3 className="user-profile-title">User Profile</h3>
      <p className="user-profile-name">Name: {name}</p>
      <p className="user-profile-posts">Total Posts: {totalPosts}</p>
      <p className="user-profile-votes">Votes: {votes}</p>
      <p className="user-profile-creation-time">Time of Account Creation: {timeOfAccountCreation}</p>
    </div>
    </div>
  );
};

export default UserProfile;

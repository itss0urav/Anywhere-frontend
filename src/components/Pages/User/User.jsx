import React from "react";
import styles from "./User.module.css";
import Vote from "../../Vote/Vote";

const UserProfile = ({
  name,
  totalPosts,
  voteCount,
  timeOfAccountCreation,
}) => {
  return (
    <div className={styles.wrappper}>
      <div className={styles.innerWrappper}>
        <h3 className="user-profile-title">User Profile</h3>
        <p className="user-profile-name">Name: {name}</p>
        <p className="user-profile-posts">Total Posts: {totalPosts}</p>
        <p className="user-profile-votes">Votes: {voteCount}</p>
        <p className="user-profile-creation-time">
          Time of Account Creation: {timeOfAccountCreation}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

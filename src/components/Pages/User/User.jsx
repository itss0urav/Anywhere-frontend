import React from "react";
import styles from "./User.module.css";
import { useContext } from "react";
import { UserContext } from "./../../../context/UserContext";
import { Link } from "react-router-dom";
const UserProfile = ({ totalPosts, voteCount, timeOfAccountCreation }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.wrappper}>
      
      <div className={styles.innerWrappper}>
        <h3 className="user-profile-title">User Profile</h3>
        <p className="user-profile-name">Name: {user}</p>
        <p className="user-profile-posts">Total Posts: {totalPosts}</p>
        <p className="user-profile-votes">Votes: {voteCount}</p>
        <p className="user-profile-creation-time">
          Time of Account Creation: {timeOfAccountCreation}
        </p>
      </div>
      <Link to="/Verified">
        <button className={styles.authBtn}>Apply For Verification</button>
      </Link>
      <Link to="/AboutUs">
        <button className={styles.authBtn}>AboutUs</button>
      </Link>
      <Link to="/FeedbackForm">
        <button className={styles.authBtn}>FeedbackForm</button>
      </Link>
    </div>
  );
};

export default UserProfile;

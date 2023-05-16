import React, { useState } from "react";
import styles from "./User.module.css";
import { useContext } from "react";
import { UserContext } from "./../../../context/UserContext";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useQuery } from "react-query";
import { useUserServices } from "../../../services/userServices";
const UserProfile = ({}) => {
  const { user, role } = useContext(UserContext);
  const [totalPosts, setTotalPosts] = useState();
  const [voteCount, setVoteCount] = useState(0);
  const [userCreationTime, setUserCreationTime] = useState();
  const userServices = useUserServices();
  useQuery({
    queryKey: ["userData"],
    queryFn: userServices.getUserInfo,
    onSuccess: (data) => {
      console.log("logging User data", data);
      setVoteCount(data?.voteCount);
      setTotalPosts(data?.postCount);
      setUserCreationTime(data?.userCreationTime);
    },
  });
  return (
    <div>
      <Navbar />
      <div className={styles.wrappper}>
        <div className={styles.innerWrappper}>
          <h3 className="user-profile-title">User Profile</h3>
          <p className="user-profile-name">Name: {user}</p>
          <p className="user-profile-posts">Total Posts: {totalPosts}</p>
          <p className="user-profile-votes">Total Votes: {voteCount}</p>
          <p className="user-profile-creation-time">
            Time of Account Creation:{" "}
            {new Date(userCreationTime).toDateString()}
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

        {role === "moderator" && (
          <Link to="/manageUsers">
            <button className={styles.modBtn}>Manage Users</button>
          </Link>
        )}
        {role === "moderator" && (
          <Link to="/">
            <button className={styles.modBtn}>Feedbacks</button>
          </Link>
        )}
        {role === "moderator" && (
          <Link to="/">
            <button className={styles.modBtn}>Reports</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

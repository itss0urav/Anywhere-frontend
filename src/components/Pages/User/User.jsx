import React, { useState } from "react";
import styles from "./User.module.css";
import { useContext } from "react";
import { UserContext } from "./../../../context/UserContext";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useQuery } from "react-query";
import { useVoteService } from "../../../customHooks/Services";
import { useUserServices } from "../../../services/userServices";
const UserProfile = ({ timeOfAccountCreation }) => {
  const { user } = useContext(UserContext);
  const [totalPosts, setTotalPosts] = useState();
  const [voteCount, setVoteCount] = useState(0);
  const [userCreationTime, setUserCreationTime] = useState();
  const voteServices = useVoteService();
  const userServices = useUserServices();
  // useQuery({
  //   queryKey:["voteCount"],
  //   queryFn:voteServices.getVoteCount,
  //   onSuccess:(data) => {
  //     console.log("logging voteCount", data)
  //     setVoteCount(data?.voteCount)}
  // })
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
        <Link to="/manageUsers">
          <button className={styles.authBtn}>Manage users</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;

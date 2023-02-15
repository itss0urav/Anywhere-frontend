import styles from "./Posts.module.css";
import Post from "../Post/Post";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
 
  console.log(user)

  return (
    <div className={styles.wrap}>
      <Post />
    </div>
  );
};

export default Posts;

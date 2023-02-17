import styles from "./Posts.module.css";
import Post from "../Post/Post";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";
import Categories from "../Categories/Categories";
const Posts = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <Post />
        <Sidebar />
        <Categories />
      </div>
    </div>
  );
};

export default Posts;

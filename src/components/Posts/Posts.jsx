import styles from "./Posts.module.css";
import Post from "../Post/Post";
const Posts = () => {
  return (
    <div className={styles.wrap}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;

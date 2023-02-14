import styles from "./Posts.module.css";
import Post from "../Post/Post";
import Sidebar from "../Pages/Sidebar/Sidebar";
const Posts = () => {
  return (
    <div className={styles.wrap}>
    
    <div className={styles.innerWrap}>
    <Post />
      <Sidebar />
      </div>  
    </div>
  );
};

export default Posts;

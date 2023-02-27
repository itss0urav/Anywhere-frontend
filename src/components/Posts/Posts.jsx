import styles from "./Posts.module.css";
import Post from "../Post/Post";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";
import { useQuery } from "react-query";
import Categories from "../Categories/Categories";
import { PostServices } from "../../services/postServices";
const Posts = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const postServices = new PostServices();
  const navigate = useNavigate();
  useQuery({
    queryFn: postServices.getPosts,
    queryKey: ["posts"],
    onSuccess: (data) => {
      console.log(data);
      setPosts(data);
    },
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <div>
          {posts.map((post) => (
            <Post
              imgUrl={post.imageUrl}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>

        <Sidebar />
        <Categories />
      </div>
    </div>
  );
};

export default Posts;

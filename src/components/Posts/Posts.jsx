import styles from "./Posts.module.css";
import Post from "../Post/Post";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";
import { useQuery } from "react-query";
import Categories from "../Categories/Categories";
import { PostServices } from "../../services/postServices";
import { Outlet, Link } from "react-router-dom";
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
              userid={post.userId}
              postId={post._id}
              vote={post.vote}
              link={post.link}
            />
          ))}
        </div>
        <div className={styles.sideCompWrapper}>
          {!user ? (
            <>
              <Link to="/Login">
                <button className={styles.createPostBtn}>
                  Login to CreatePost
                </button>
              </Link>
            </>
          ) : (
            <Link to="/CreatePost">
              <button className={styles.createPostBtn}>CreatePost</button>
            </Link>
          )}
          <Sidebar />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Posts;

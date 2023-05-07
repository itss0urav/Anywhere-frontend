import styles from "./Posts.module.css";
import Post from "../Post/Post";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Categories from "../Categories/Categories";
import { PostServices } from "../../services/postServices";
import { Outlet, Link } from "react-router-dom";
const Posts = () => {
  const { user, posts } = useContext(UserContext);

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
              vote={post?.vote}
              link={post.link}
              username={post?.userId?.username}
              isNfsw={post?.isNfsw}
            />
          ))}
        </div>
        <div className={styles.sideCompWrapper}>
          {!user ? (
            <>
              <div className={styles.createPostWrap}>
                <Link to="/Login">
                  <button className={styles.createPostBtn}>CreatePost</button>
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.createPostWrap}>
              <Link to="/CreatePost">
                <button className={styles.createPostBtn}>CreatePost</button>
              </Link>
            </div>
          )}

          <div className={styles.createPostWrap}>
              <Link to="/">
                <button className={styles.createPostBtn}>Trending🔥</button>
              </Link>
            </div>
          <div className={styles.categWrap}>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

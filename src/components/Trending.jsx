import React, { useEffect, useState } from "react";
import { callApi } from "../services/callApi";
import Post from "./Post/Post";

const Trending = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await callApi({
        relativePath: "/post",
        method: "get",
      });
      response && setTrendingPosts(response.data);
    }
    getPosts();
  }, []);

  return (
    <div style={{ color: "white", position:"relative" }}>
      <h2 style={{marginBottom:30, marginLeft:26, fontFamily:"cursive"}}>Top trending posts</h2>
      <div
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {trendingPosts.map((post) => (
          <Post
            postId={post._id}
            username={post.username}
            title={post?.title}
            description={post.description}
            vote={post.vote}
            imgUrl={post.imageUrl}
            link={post.link}
            isNfsw={post.isNfsw}
            userid={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;

import React, { useEffect, useState } from "react";
import { callApi } from "../services/callApi";
import Post from "./Post/Post";
import { useQuery } from "react-query";

const Trending = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  useQuery({
    queryKey:"trendingPosts",
    queryFn:async() => {
      return await callApi({
        relativePath: "/post/trending",
        method: "get",
      }) 
    },
    onSuccess:(response) => setTrendingPosts(response.data)
  })
  // useEffect(() => {
  //   async function getPosts() {
  //     const response = await callApi({
  //       relativePath: "/post/trending",
  //       method: "get",
  //     });
  //     response && setTrendingPosts(response.data);
  //   }
  //   getPosts();
  // }, []);

  return (
    <div style={{ color: "white", position: "relative" }}>
      <h2
        style={{
          marginBottom: 30,
          textAlign: "center",
          marginLeft: 26,
          fontFamily: "poppins",
        }}
      >
        Top trending posts
      </h2>
      <div
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {trendingPosts.map((post) => (
          <Post
            postId={post.resourceId._id}
            username={post.resourceId.username}
            title={post?.resourceId.title}
            description={post.resourceId.description}
            vote={post}
            imgUrl={post.resourceId.imageUrl}
            link={post.resourceId.link}
            isNfsw={post.resourceId.isNfsw}
            userid={post.resourceId.userId}
          />
        ))}
       
      </div>
    </div>
  );
};

export default Trending;

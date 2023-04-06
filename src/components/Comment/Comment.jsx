import React, { useState } from "react";
import styles from "./Comment.module.css";
import Vote from "../Vote/Vote";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { usePostServices } from "../../customHooks/Services";
import Post from "../Post/Post";
const Comment = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const postServices = usePostServices();
  useQuery({
    queryKey: ["postById", postId],
    queryFn: postServices.getPostById,
    onSuccess: (data) => {
      console.log(data);
      setPost(data[0]);
    },
  });
  return (
   <div style={{width:"50%"}}>
   <Post 
   description={post?.description}
    imgUrl={post?.imageUrl}
    link={post?.link}
    title={post?.title}
    username={post?.userId?.username}
    vote={post?.vote}
    postId={post?._id}
    userid={post?.userId?._id}
    context="comment"
   />
   <div style={{background:"white", marginLeft:"40px"}}>
      <h3 style={{fontFamily:"Lato"}}>Comments</h3>
   </div>
   </div>
  );
};

export default Comment;

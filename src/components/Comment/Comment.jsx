import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { usePostServices } from "../../customHooks/Services";
import Post from "../Post/Post";

const Comment = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const commentRef = useRef();
  const postServices = usePostServices();
  const queryClient = useQueryClient()
  useQuery({
    queryKey: ["postById", postId],
    queryFn: postServices.getPostById,
    onSuccess: (data) => {
      console.log(data);
      setPost(data[0]);
    },
  });
  useQuery({
    queryKey: ["commentsById", postId],
    queryFn: postServices.getComments,
    onSuccess: (data) => {
      console.log(data);
      setComments(data);
    },
  });
  const { mutate: createNewComment } = useMutation({
    mutationKey: ["createComment"],
    mutationFn: postServices.createComment,
    onSuccess: (data) => {
      commentRef.current.value = "";
      queryClient.invalidateQueries("commentsById")},
  });

  async function handleCommentCreation() {
    const commentInfo = {
      postId: post._id,
      content: commentRef.current.value,
    };
    console.log(commentInfo);
    await createNewComment(commentInfo);
  }
  return (
    <div style={{ width: "50%",paddingLeft:"20%" }}>
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
      <div
        style={{ background: "white", marginLeft: "2.5rem",paddingLeft:"1rem", paddingRight:"1rem" }}>
        <h3 style={{ fontFamily: "Lato"}}>Comments</h3>
        {/* <div style={{height:"1px", width:"90%", backgroundColor:"black"}}></div> */}
        <div
          style={{
            marginTop: "1rem",
            display:"flex",
            flexDirection:"column",
            gap:15
          }}>
          {comments.map((comment) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid grey",
                  minHeight:"5rem",
                  borderRadius: "5px",
                  padding: "0.5rem",
                  justifyContent:"space-between"
                }}>
                <p>{comment.content}</p>
                <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                }}>
                  <div>
                    <p> upVote</p>
                    <p>downVote</p>
                  </div>
                <h6 style={{ alignSelf: "end" }}>Commented by {comment.userId.username}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <textarea type="text" ref={commentRef} placeholder="Race a new Comment" style={{minHeight:"3rem", marginTop:"2rem", width:"90%", padding:"1rem"}} onKeyUp={(e) => e.key == 13 && handleCommentCreation()}/>
        <button onClick={() => handleCommentCreation()}>Post</button>
      </div>
    </div>
  );
};

export default Comment;

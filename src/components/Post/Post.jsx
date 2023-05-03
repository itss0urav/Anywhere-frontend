import React, { useState, useContext } from "react";
import styles from "./Post.module.css";
import Vote from "../Vote/Vote";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { QueryClient, useMutation } from "react-query";
import { PostServices } from "../../services/postServices";
import { useVoteService } from "../../customHooks/Services";
const Post = ({
  imgUrl,
  title,
  description,
  userid,
  postId,
  vote,
  link,
  username,
  context,
  isNfsw
}) => {
  const queryClient = new QueryClient();
  const postServices = new PostServices();
  const [nfswImageRevealState, setNfswImageRevealState] = useState(false)
  const { mutate } = useMutation(postServices.deletePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
    },
  });

  const { userId } = useContext(UserContext);


  function handleImageClick(){

    if(isNfsw){
      setNfswImageRevealState(true)
    }
  }
  return (
    <div className={styles.postWrap}>
      <Vote vote={vote} postId={postId} />

      <div className={styles.wrap}>
        <div className={styles.userNAme}>
          <p>Posted by {username}</p>
        </div>
        <p className={styles.title}>{title}</p>
        <p style={{display:"", position:"absolute", top:20, right:10, color:"red", fontWeight:500}}>NFSW</p>
        <div className={styles.imageWrap}>
          <img src={imgUrl} onClick={handleImageClick} alt="computer" style={{filter:isNfsw && !nfswImageRevealState ? "blur(10px)" : ""}}/>
        </div>
        <div className={styles.linkGap}>
          <a href={link} style={{ zIndex: 20 }}>
            {link}
          </a>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.feedBacks}>
          {context !== "comment" && (
            <Link to={`/comment/${postId}`}>
              <i class="fa-solid fa-comment-dots"></i>Comments
            </Link>
          )}

          <div className={styles.reports}>
            <Link to="/ReportPost">
              <i class="fa-solid fa-triangle-exclamation"></i>Report
            </Link>
          </div>
          <div className={styles.deleteButtonWrap}>
            {userid?._id == userId && (
              <p style={{ cursor: "pointer" }} onClick={() => mutate(postId)}>
                <i class="fa-solid fa-trash-can"></i>Delete
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

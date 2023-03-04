import React, { useState, useContext } from "react";
import styles from "./Post.module.css";
import Vote from "../Vote/Vote";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { QueryClient, useMutation } from "react-query";
import { PostServices } from "../../services/postServices";
const Post = ({ imgUrl, title, description, userid, postId, vote, link }) => {
  const queryClient = new QueryClient();
  const postServices = new PostServices();
  const { mutate } = useMutation(postServices.deletePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
    },
  });

  const { userId } = useContext(UserContext);
  return (
    <div className={styles.postWrap}>
      <Vote vote={vote} />

      <div className={styles.wrap}>
        <div className={styles.userNAme}>
          <p>Posted by Author</p>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.imageWrap}>
          <img src={imgUrl} alt="computer" />
          <div className={styles.linkGap}>
            <a href={link}>{link}</a>
          </div>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.feedBacks}>
          <Link to="/Cmt">
            <i class="fa-solid fa-comment-dots"></i>Comments
          </Link>
          <div className={styles.reports}>
            <Link to="/ReportPost">
              <i class="fa-solid fa-triangle-exclamation"></i>Report
            </Link>
          </div>
          <div className={styles.deleteButtonWrap}>
            {userid == userId && (
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

import React, { useState } from "react";
import styles from "./Post.module.css";
import Vote from "../Vote/Vote";
import { Link } from "react-router-dom";
const Post = ({ imgUrl, title, description}) => {
  return (
    <div className={styles.postWrap}>
      <Vote />

      <div className={styles.wrap}>
        <div className={styles.userNAme}>
          <p>Posted by Author</p>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.imageWrap}>
          <img src={imgUrl} alt="computer" />
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.feedBacks}>
          <Link to="/Comment">
            <i class="fa-solid fa-comment-dots"></i>Comments
          </Link>
          <div className={styles.reports}>
            <Link to="/ReportPost">
              <i class="fa-solid fa-triangle-exclamation"></i>Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

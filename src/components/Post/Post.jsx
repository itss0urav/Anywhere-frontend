import React, { useState } from "react";
import styles from "./Post.module.css";
const Post = (postData) => {
  return (
    <div className={styles.postWrap}>
      <div className={styles.arrowWrap}>
        <i className="fa-solid fa-arrow-up"></i>
        <p>100</p>
        <i className="fa-solid fa-arrow-down"></i>
      </div>
      <div className={styles.wrap}>
        <div className={styles.userNAme}>
          <p>Posted by Author</p>
        </div>
        <p className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          expedita saepe itaque tenetur esse natus cumque, rem fugiat sit iusto?
        </p>
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"
            alt="computer"
          />
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          aliquid possimus, amet voluptatum rem incidunt quibusdam aut maiores
          explicabo deserunt.
        </p>
        <div className={styles.feedBacks}>
          <i class="fa-solid fa-comment-dots"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;

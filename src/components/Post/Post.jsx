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
          IKKA FANS (KARACHI UNITED)
        </p>
        <div className={styles.imageWrap}>
          <img
            src="https://media.discordapp.net/attachments/979241917852303370/1054756965273845820/Picsart_22-12-20_19-16-40-819.jpg?width=1191&height=670"
            alt="computer"
          />
        </div>
        <p className={styles.desc}>
        "Ikka fans" refers to fans of Indian film actor Mammootty. He is a prominent film actor in the Indian film industry, particularly in the Malayalam film industry. He has acted in over 400 films and is considered one of the greatest actors in Indian cinema. His fans admire his acting skills, versatility, and charismatic screen presence. They are passionate about his movies and follow his work closely.
        </p>
        <div className={styles.feedBacks}>
          <i class="fa-solid fa-comment-dots"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;

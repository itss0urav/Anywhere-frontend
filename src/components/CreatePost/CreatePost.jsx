import React, { useState } from "react";
import styles from "./CreatePost.module.css";

const Post = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
const [successMessage, setSuccessMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("Post Created successfully!");
    let newPost = {
      title,
      imageUrl:image,
      description:comment,
      link
    }
    console.log(newPost)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrap}>
      <h1 className={styles.header}>Create a Post</h1>
      {successMessage ? (
        <p style={{ color: "green" }}>{successMessage}</p>
      ) : null}
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
      </div>
      <label>
        Image:
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
        />
      </label>
      <div>
        <label>
          Link:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Comment:
          <textarea
            className={styles.commentWrap}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Post;

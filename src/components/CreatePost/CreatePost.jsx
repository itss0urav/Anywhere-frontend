import React, { useState } from "react";
import styles from "./CreatePost.module.css";

function Post() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="post-container">
      <h2>Create a Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
}

export default Post;

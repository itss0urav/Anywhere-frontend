import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const Post = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileName = Date.now() + image.name;
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, image).then((snapshot) => {
      console.log(snapshot);
    });

    const imgUrl = await getDownloadURL(ref(storage, fileName));

    let newPost = {
      title,
      imgUrl,
      description: comment,
      link,
      category,
    };
    console.log(newPost);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrap}>
      <h1 className={styles.header}>Create a Post</h1>

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
          Text:
          <textarea
            className={styles.commentWrap}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      {/* {successMessage ? (
      <p style={{ color: "red" }}>{successMessage}</p>
    ) : null} */}
    </form>
  );
};

export default Post;

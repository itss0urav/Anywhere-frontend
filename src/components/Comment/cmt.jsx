import styles from "./Comment.module.css";
import React, { useRef, useState } from "react";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useMutation, useQueryClient } from "react-query";
import { PostServices } from "../../services/postServices";
import { useNavigate } from "react-router-dom";
const Post = () => {
  const descriptionRef = useRef();
  const linkRef = useRef();
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const postServices = new PostServices();
  const { mutate } = useMutation(postServices.createPost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      navigate("/");
    },
  });

  //Function to create a new post
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileName = Date.now() + image.name;
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, image).then((snapshot) => {
      console.log(snapshot);
    });

    const imgUrl = await getDownloadURL(ref(storage, fileName));

    let newPost = {
      imageUrl: imgUrl,
      description: descriptionRef.current.value,
      link: linkRef.current.value,
      // category: categoryRef.current.value,
    };
    mutate(newPost);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrap}>
      <h1 className={styles.header}>Comment</h1>

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
          <input type="text" ref={linkRef} />
        </label>
      </div>
      <div>
        <label>
          Text:
          <textarea
            className={styles.commentWrap}
            ref={descriptionRef}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Post;

import React, { useRef, useState } from "react";
import styles from "./CreatePost.module.css";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useMutation, useQueryClient } from "react-query";
import { PostServices } from "../../services/postServices";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
const Post = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const linkRef = useRef();
  const nsfwRef = useRef();
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const postServices = new PostServices();
  const { mutate, isLoading, isError } = useMutation(postServices.createPost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      queryClient.invalidateQueries("Categories")
      navigate("/");
    },
  });

  //Function to create a new post
  const handleSubmit = async (event) => {
    let imgUrl
    event.preventDefault();
    if(image){
      const fileName = Date.now() + image.name;
      const storageRef = ref(storage, fileName);
      await uploadBytes(storageRef, image).then((snapshot) => {
        console.log(snapshot);
      });
     imgUrl = await getDownloadURL(ref(storage, fileName));
    }

    let newPost = {
      title: titleRef.current.value,
      imageUrl: imgUrl,
      description: descriptionRef.current.value,
      link: linkRef.current.value,
      category: categoryRef.current.value,
      isNfsw: nsfwRef.current.checked,
    };
    console.log(newPost)
    mutate(newPost);
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
          <CircleLoader color="#36d7b7" size={106} />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formWrap}>
          <h1 className={styles.header}>Create a Post</h1>

          <div>
            <label>
              Title:
              <input type="text" ref={titleRef} required />
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
          <div>
            <label>
              Category:
              <input type="text" ref={categoryRef} required />
            </label>
          </div>
          <div>
            <label>
              NotSafeForWork:
              <label className={styles.checkboxLabel}>
                <input type="checkbox" ref={nsfwRef} />
                <span className={styles.checkmark}></span>
              </label>
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default Post;

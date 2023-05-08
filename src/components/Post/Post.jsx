import React, { useState, useContext } from "react";
import styles from "./Post.module.css";
import Vote from "../Vote/Vote";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { QueryClient, useMutation } from "react-query";
import { PostServices } from "../../services/postServices";
import { MdVerified } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
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
  isNfsw,
}) => {
  const queryClient = new QueryClient();
  const postServices = new PostServices();
  const [nfswImageRevealState, setNfswImageRevealState] = useState(false);
  const { mutate } = useMutation(postServices.deletePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
    },
  });

  const { userId, role } = useContext(UserContext);

  console.log(role);
  function handleImageClick() {
    if (isNfsw) {
      setNfswImageRevealState(true);
    }
  }
  return (
    <div className={styles.postWrap}>
      <Vote vote={vote} postId={postId} />

      <div className={styles.wrap}>
        <div className={styles.userNAme}>
          <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <>Posted by {username}</>
            <>{userid?.isVerified && <MdVerified />}</>
          </p>
        </div>
        <p className={styles.title}>{title}</p>
        {isNfsw && (
          <p
            style={{
              display: "",
              position: "absolute",
              top: 20,
              right: 10,
              color: "red",
              fontWeight: 900,
            }}
          >
            NSFW
          </p>
        )}
        <div className={styles.imageWrap}>
          <img
            src={imgUrl}
            onClick={handleImageClick}
            style={{
              filter: isNfsw && !nfswImageRevealState ? "blur(10px)" : "",
            }}
          />
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
            {(userid?._id == userId || role === "moderator") && (
              <p style={{ cursor: "pointer" }} onClick={() => mutate(postId)}>
                <i class="fa-solid fa-trash-can"></i>Delete
              </p>
            )}
          </div>
          <div className={styles.deleteButtonWrap}>
            <Link to={`/overview/${postId}`}>
              <AiOutlineFileSearch />
              Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

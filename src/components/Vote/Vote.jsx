import React, { useState } from "react";
import { useMutation } from "react-query";
import { useVoteService } from "../../customHooks/Services";
import styles from "./Vote.module.css";
import { useQueryClient } from "react-query";

const Vote = ({ vote, postId }) => {
  const voteServices = useVoteService();
  const queryClient = useQueryClient();

  const [voteColor, setVoteColor] = useState("");

  const {
    isLoading,
    isError,
    mutate: upVote,
  } = useMutation({
    mutationKey: ["upVote"],
    mutationFn: voteServices.upVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      queryClient.invalidateQueries("trendingPosts")
      queryClient.invalidateQueries(postId);
    },
  });

  const { mutate: downVote } = useMutation({
    mutationKey: ["downVote"],
    mutationFn: voteServices.downVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      queryClient.invalidateQueries("trendingPosts")
      queryClient.invalidateQueries(postId);
    },
  });

  async function upVotePost() {
    if (voteColor === "green") {
      setVoteColor("");
    } else {
      setVoteColor("green");
    }
    upVote({ resourceId: postId, up: true });
  }

  async function downVotePost() {
    if (voteColor === "red") {
      setVoteColor("");
    } else {
      setVoteColor("red");
    }
    downVote({ resourceId: postId, up: false });
  }

  return (
    <div className={styles.voteContainer}>
      <i
        className="fa-solid fa-arrow-up "
        style={{
          cursor: "pointer",
          color: voteColor === "green" ? "green" : "",
        }}
        onClick={upVotePost}
      ></i>
      <span className={styles.voteCount}>{vote?.vote}</span>
      <i
        className="fa-solid fa-arrow-down"
        style={{ cursor: "pointer", color: voteColor === "red" ? "red" : "" }}
        onClick={downVotePost}
      ></i>
    </div>
  );
};

export default Vote;

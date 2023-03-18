import React, { useState } from "react";
import { useMutation } from "react-query";
import { useVoteService } from "../../customHooks/Services";
import styles from "./Vote.module.css";
import { useQueryClient } from "react-query";
const Vote = ({ vote, postId }) => {
  const voteServices = useVoteService();
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    mutate: upVote,
  } = useMutation({
    mutationKey: ["upVote"],
    mutationFn: voteServices.upVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
    },
  });
  const { mutate: downVote } = useMutation({
    miutationKey: ["downVote"],
    mutationFn: voteServices.downVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
    },
  });
  async function upVotePost() {
    upVote({ postId, up: true });
  }
  async function downVotePost() {
    downVote({ postId, up: false });
  }
  return (
    <div className={styles.voteContainer}>
      <i
        className="fa-solid fa-arrow-up"
        style={{ cursor: "pointer" }}
        onClick={upVotePost}></i>
      <span className={styles.voteCount}>{vote.vote}</span>
      <i
        className="fa-solid fa-arrow-down"
        onClick={downVotePost}
        style={{ cursor: "pointer" }}></i>
    </div>
  );
};

export default Vote;

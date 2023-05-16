import React, { useContext, useState } from "react";
import styles from "./FeedbackForm.module.css";
import Navbar from "../../Navbar/Navbar";
import { UserContext } from "../../../context/UserContext";
import { callApi } from "../../../services/callApi";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const { user, userId } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const feedBackObj = {
      rating,
      description: comments,
      username: user,
      email,
      userId: userId,
    };

    await callApi({
      relativePath: "/feedback",
      method: "post",
      apiData: feedBackObj,
    });
    navigate("/");
  };

  return (
    <div>
      <div className={styles.navbarGap}>
        <Navbar />
      </div>

      <form onSubmit={handleSubmit} className={styles.formWrap}>
        <h1 className={styles.header}>Feedback Form</h1>
        {successMessage ? (
          <p style={{ color: "green" }}>{successMessage}</p>
        ) : null}
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              required
            >
              <option value={0}>Select a Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Comments:
            <textarea
              className={styles.commentWrap}
              value={comments}
              onChange={(event) => setComments(event.target.value)}
              required
            />
          </label>
        </div>
        <button className={styles.buttonHeight} type="submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

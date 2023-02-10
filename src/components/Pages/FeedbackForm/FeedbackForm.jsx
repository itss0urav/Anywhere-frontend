import React, { useState } from "react";
import styles from "./FeedbackForm.module.css";
const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("Thank you for submitting your feedback!");
    setRating(0);
    setComments("");
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Feedback Form</h1>
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
          <select value={rating} onChange={(event) => setRating(event.target.value)} required>
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
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;

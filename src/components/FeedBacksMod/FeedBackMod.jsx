import axios from "axios";
import { useEffect, useState } from "react";

const FeedBackMod = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  async function getFeedBacks() {
    const response = await axios.get("http://localhost:5000/feedback");
    response && setFeedbacks(response.data);
  }

  async function deleteFeedback(id) {
    const response = await axios.delete(`http://localhost:5000/feedback/${id}`);
    response && getFeedBacks();
  }
  useEffect(() => {
    getFeedBacks();
  }, []);
  return (
    <div
      style={{ color: "white", padding: "20px 20px", fontFamily: "poppins" }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>Feedbacks</h1>
      </div>
      <div
        style={{
          height: "5px",
          width: "100%",
          backgroundColor: "gray",
          borderRadius: "5px",
          marginBottom: "30px",
        }}
      ></div>

      <div style={{ fontFamily: "poppins" }}>
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            style={{
              border: "1px solid white",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                marginLeft: "11px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              <p>Username: {feedback?.username}</p>
              <p>Email: {feedback?.email}</p>
              <p>Message: {feedback?.description}</p>
              <p>Rating: {feedback?.rating}</p>
            </div>
            <button
              onClick={() => deleteFeedback(feedback._id)}
              style={{
                color: "red",
                backgroundColor: "red",
                borderRadius: "3px",
                padding: "5px 10px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackMod;

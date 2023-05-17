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
    <div style={{ color: "white", padding: "20px 20px" }}>
      <h1 style={{ fontFamily: "Roboto" }}>Feedbacks</h1>
      <div
        style={{
          height: "5px",
          width: "100%",
          backgroundColor: "gray",
          borderRadius: "5px",
        }}></div>

        <div style={{marginTop:"30px"}}>
          {
            feedbacks.map((feedback) => (
            <div style={{fontFamily:"Roboto", border:"1px solid white", padding:"5px 5px", borderRadius:"5px"}}>
            <p>Name : {feedback?.username}</p>
            <p>Email : {feedback?.email}</p>
            <p>Message : {feedback?.description}</p>
            <p>Rating : {feedback?.rating}</p>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default FeedBackMod;

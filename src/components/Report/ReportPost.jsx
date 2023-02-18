import React, { useState } from "react";
import styles from "./ReportPost.module.css";

function ReportPost({ postId }) {
  const [reportReason, setReportReason] = useState("");

  const handleReportChange = (event) => {
    setReportReason(event.target.value);
  };

  const handleReportSubmit = (event) => {
    event.preventDefault();
    // Call a function to submit the report to the server
    // and then clear the report reason
    setReportReason("");
  };

  return (
    <div className={styles.reportpost}>
      <h2>Report Post</h2>
      <form onSubmit={handleReportSubmit}>
        <label>
          Reason for report:
          <textarea
            value={reportReason}
            onChange={handleReportChange}
            required
          />
        </label>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportPost;

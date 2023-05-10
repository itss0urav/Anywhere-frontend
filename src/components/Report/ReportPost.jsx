import React, { useContext, useRef, useState } from "react";
import styles from "./ReportPost.module.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { callApi } from "../../services/callApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReportPost() {
  const {userId } = useContext(UserContext);
  const reportReasonRef = useRef();
  const { postId } = useParams();
  const navigate = useNavigate()
  const notify = () => toast("Reported post successfully");

  const handleReportSubmit = async (event) => {
    event.preventDefault();
    const reportObj = {
      userId,
      postId,
      reason:reportReasonRef.current.value
    }
    const response = await callApi({
      relativePath:"/report",
      method:"post",
      apiData:reportObj
    })


    if(response.status === 200) {
      notify()
      setTimeout(() => {
        navigate("/")
      }, 500);
    }
     
   if(response) reportReasonRef.current.value = null
  };


  return (
    <div className={styles.reportpost}>
      <h2>Report Post</h2>
      <form onSubmit={handleReportSubmit}>
        <label>
          Reason for report:
          <textarea ref={reportReasonRef}  required />
        </label>
        <button type="submit">Submit Report</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ReportPost;

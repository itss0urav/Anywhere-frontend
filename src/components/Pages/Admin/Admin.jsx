import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [reportedPosts, setReportedPosts] = useState([]);
  const [verificationRequests, setVerificationRequests] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('/api/feedbacks')
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('/api/reported-posts')
      .then(res => setReportedPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('/api/verification-requests')
      .then(res => setVerificationRequests(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleBanUser = (userId) => {
    axios.put(`/api/users/${userId}/ban`)
      .then(res => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              banned: true
            }
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(err => console.log(err));
  }

  const handleUnbanUser = (userId) => {
    axios.put(`/api/users/${userId}/unban`)
      .then(res => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              banned: false
            }
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(err => console.log(err));
  }

  const handleDeleteFeedback = (feedbackId) => {
    axios.delete(`/api/feedbacks/${feedbackId}`)
      .then(res => {
        const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== feedbackId);
        setFeedbacks(updatedFeedbacks);
      })
      .catch(err => console.log(err));
  }

  const handleDeleteReportedPost = (reportedPostId) => {
    axios.delete(`/api/reported-posts/${reportedPostId}`)
      .then(res => {
        const updatedReportedPosts = reportedPosts.filter(reportedPost => reportedPost.id !== reportedPostId);
        setReportedPosts(updatedReportedPosts);
      })
      .catch(err => console.log(err));
  }

  const handleAcceptVerificationRequest = (userId) => {
    axios.put(`/api/users/${userId}/verify`)
      .then(res => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              verified: true
            }
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(err => console.log(err));
  }

  const handleDenyVerificationRequest = (userId) => {
    axios.put(`/api/users/${userId}/deny-verification`)
      .then(res => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              verified: false
            }
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Total Posts</th>
            <th>Total Votes</th>
            <th>Banned</th>
            <th>Verified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.total_posts}</td>
              <td>{user.total_votes}</td>
              <td>{user.banned ? "Yes" : "No"}</td>
              <td>{user.verified ? "Yes" : "No"}</td>
              <td>
                {!user.banned && <button onClick={() => handleBanUser(user.id)}>Ban User</button>}
                {user.banned && <button onClick={() => handleUnbanUser(user.id)}>Unban User</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Feedbacks</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            <p>From: {feedback.name}</p>
            <p>Email: {feedback.email}</p>
            <p>Message: {feedback.message}</p>
            <button onClick={() => handleDeleteFeedback(feedback.id)}>Delete Feedback</button>
          </li>
        ))}
      </ul>

      <h2>Reported Posts</h2>
      <ul>
        {reportedPosts.map(reportedPost => (
          <li key={reportedPost.id}>
            <p>Post ID: {reportedPost.post_id}</p>
            <p>Reason: {reportedPost.reason}</p>
            <button onClick={() => handleDeleteReportedPost(reportedPost.id)}>Delete Reported Post</button>
          </li>
        ))}
      </ul>

      <h2>Verification Requests</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {verificationRequests.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleAcceptVerificationRequest(user.id)}>Accept</button>
                <button onClick={() => handleDenyVerificationRequest(user.id)}>Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Call API to fetch users and posts data
    // setUsers(response.data.users)
    // setPosts(response.data.posts)
  }, []);

  const handleDeletePost = (postId) => {
    // Call API to delete post with postId
    // setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
  };

  const handleBanUser = (userId) => {
    // Call API to ban user with userId
    // setUsers(prevUsers => prevUsers.map(user => {
    //   if (user.id === userId) {
    //     return { ...user, banned: true };
    //   }
    //   return user;
    // }))
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
            {user.banned ? "(banned)" : ""}
            <button onClick={() => handleBanUser(user.id)}>Ban</button>
          </li>
        ))}
      </ul>
      <h2>Posts</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.username}</h3>
          <ul>
            {posts
              .filter((post) => post.userId === user.id)
              .map((post) => (
                <li key={post.id}>
                  {post.title}
                  <button onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;

import React, { useState } from 'react';

const Post = ({title, content, link}) => {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      {link && (
        <a href={link} className="post-link">
          Read more
        </a>
      )}
      <div className="post-votes">
        <button className="post-upvote" onClick={handleUpvote}>
          Upvote
        </button>
        <span className="post-vote-count">{votes}</span>
        <button className="post-downvote" onClick={handleDownvote}>
          Downvote
        </button>
      </div>
    </div>
  );
};

export default Post;

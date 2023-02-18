import React, { useState } from 'react';

function Comment({ comment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Call a function to update the comment in the database
    // and then set isEditing to false
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedComment(comment);
  };

  const handleChange = (event) => {
    setEditedComment(event.target.value);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <p>{comment}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      ) : (
        <>
          <textarea value={editedComment} onChange={handleChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      )}
    </div>
  );
}

export default Comment;

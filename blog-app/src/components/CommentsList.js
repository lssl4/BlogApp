import React from "react";

function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      {comments.map((comment, key) => (
        <div key={key} className="comment">
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
}

export default CommentsList;

import React from "react";

const CommentDetails = props => {
    const {name, time, comment, image} = props
  return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={image}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">Today at {time}</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
  );
};
export default CommentDetails
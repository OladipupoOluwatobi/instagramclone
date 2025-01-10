import React from "react";
import './Comment.scss';

function Comment(){
  return(
    <div className="comment">
      <div className="emoji-comment">
        <i className="far fa-smile"></i>
        <input className="text-box" type="text" placeholder="Add a comment..." />
      </div>
      <p className="publish">Publish</p>
    </div>
  )
}
export default Comment
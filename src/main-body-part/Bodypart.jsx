import React from 'react'
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Bodypart.scss';
import HashTag from './hash-tag-component/Hash';
import Comment from './comment-component/Comment';

function MiddleBody(){
  return(
    <div className='body-container'>
      <div className="icon-div">
        <div className="left-icon">
          <i className='far fa-heart'></i>
          <i class="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>

        <div className="right-icon">
          <i className="far fa-bookmark"></i>
        </div>
      </div>

      <div className="numbers-of-like">

        <p className='liked'>Liked by <span>you</span> and <span>905,235 others</span></p>

        <HashTag />

        <div className="view-div">
          <p className='view'>View all 103 comments</p>
          <p className='hour'>HOUR AGO</p>
        </div>
        
      </div>

      <Comment />
      
    </div>
  )
}
export default MiddleBody
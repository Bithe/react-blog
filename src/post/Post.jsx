import React from 'react';
import 'Post.css';
import images from '../images/images.jpg';

export default function Post() {
  return (
    <div className='post'>
       <img className='postImg' src={images} alt="" />

       <div className="postInfo">
        <div className="postCats">
            <span className='postCat'></span>
            <span className='postCat'></span>
        </div>

        <span className='postTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla similique accusamus consequatur sint nostrum porro!
        </span>
       </div>

    </div>
  )
}

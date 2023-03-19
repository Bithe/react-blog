import React from 'react';
import "./Header.css";

import images from '../images/banner.png';

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitle1'>React & Node</span>
        <span className='headerTitle2'>Blog</span>
      </div>

     
      <img  className="headerImg" src={images} alt=""/>
    </div>
  )
}

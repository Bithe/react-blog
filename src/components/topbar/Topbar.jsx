import React from "react";
import "./Topbar.css";
import images from '../images/images.jpg';


export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-square-pinterest"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">ABout</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>

      <div className="topRight">
        <img  className="topImage" src={images} alt=""/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

     
    </div>
  );
}

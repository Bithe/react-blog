import React from "react";
import "./Sidebar.css";
import images from "../images/images.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={images} alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
          culpa.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>

        <ul className="sidebarList">
          <li className="sidebarListItem">Study</li>
          <li className="sidebarListItem">Youtube Vlog</li>
          <li className="sidebarListItem">Islamic study</li>
          <li className="sidebarListItem">Work</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        </div>    
      </div>

    </div>
  );
}

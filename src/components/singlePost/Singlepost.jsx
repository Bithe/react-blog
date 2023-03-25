import React from "react";
import "./SinglePost.css";
import images from "../images/images.jpg";

export default function Singlepost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={images} alt="" className="singlePostImg" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          obcaecati!
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Fatema</b>
                </span>
            <span className="singlePostTime">Date</span>
        </div>
        <p className="singlePostDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nam.
        </p>
      </div>
    </div>
  );
}

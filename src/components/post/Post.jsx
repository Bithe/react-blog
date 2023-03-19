import React from "react";
import "./Post.css";
import images from "../images/images.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={images} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">work</span>
          <span className="postCat">life</span>
        </div>

        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          similique accusamus consequatur sint nostrum porro!
        </span>
        <hr />
        <span className="postDate"></span>
      </div>

      <p className="postDec">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, rem repellat quam tempora et ullam mollitia quos, consequatur deleniti nulla, a placeat dolor iste quisquam atque ut quia. Est, ea. Dolores incidunt, optio laborum nesciunt dolore exercitationem consectetur sapiente, corrupti dolorum pariatur asperiores reprehenderit provident expedita, officiis corporis magnam. Unde.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam cum, quos praesentium esse libero nam explicabo saepe quam quasi mollitia placeat, dolorum modi necessitatibus deserunt magni incidunt corrupti, labore ea officia! Sint necessitatibus, corrupti odit neque, assumenda laudantium illum modi eum esse architecto illo corporis iure suscipit alias pariatur voluptas?      </p>
    </div>
  );
}

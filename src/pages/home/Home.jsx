import React from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </div>
  );
}

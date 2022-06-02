import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Home.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Home() {
  return (
    <div className="quora">
      <QHeader />
      <div className="quora__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Home;

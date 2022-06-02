import React from "react";
import "./Widget.css";
import WidgetContent from "./WidgetContent";
import { Link } from "react-router-dom";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
      <Link to = "/News" style={{ textDecoration: "none" }}>
        <h5>Latest Updates</h5>
        </Link>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;

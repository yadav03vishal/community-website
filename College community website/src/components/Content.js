import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Content.css";

export default function Content() {
  const user = useSelector(selectUser);

  return (
    <div className="quorBox">
      <div className="quorBox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://www.pngfind.com/pngs/m/350-3508795_link-to-user-register-transparent-student-logo-png.png"
          }
          className="quorBox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="quorBox__quora">
        <p>Welcome to Lost & Found forum </p>
      </div>
      
    </div>
  );
}

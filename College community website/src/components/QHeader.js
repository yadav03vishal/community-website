import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Modal from "react-modal";
import { Route, Routes, NavLink, Link } from "react-router-dom";

import "./QHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { ExpandMore } from "@material-ui/icons";
// import {InsertLinkIcon} from '@mui/icons-material/InsertLink';
import firebase from "firebase";

Modal.setAppElement("#root");

function QHeader() {
  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <a href = "http://www.iiitsonepat.ac.in/" target = "_blank" style={{ textDecoration: "none" }}>
        <p className="text-sonepat" style ={{color : "red"}}>
          Indian Institute of Information Technology, Sonepat
        </p>
        </a>
      </div>
      <div className="qHeader__icons">
      <Link to = '/'>
        <div className="active qHeader__icon">
          <HomeIcon />
        </div> 
        </Link>
        <Link to = "/News">
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        </Link>

        
        <Link to = "/Lost-and-Found">
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        </Link>
        <Link to ="/Connections">
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        </Link>
        {/* <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div> */}
      </div>
      {/* <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="search question" />
      </div> */}
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://www.pngfind.com/pngs/m/350-3508795_link-to-user-register-transparent-student-logo-png.png"
            }
          />
          <p>Log out </p>
        </div>
        {/* <LanguageIcon /> */}
        <Button onClick={() => setIsModalOpen(true)}>Post/Add</Button>
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
          </div>

          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://www.pngfind.com/pngs/m/350-3508795_link-to-user-register-transparent-student-logo-png.png"
              }
            />

            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>

            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Use of strong language is strictly forbidden.Will result in ban from website."
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QHeader;

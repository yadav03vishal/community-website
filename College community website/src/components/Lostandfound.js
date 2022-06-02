import React, { useEffect, useState } from "react";
import "./Lostandfound.css";
import Nav_laf from "./Nav_laf"
import Content from "./Content"
import Post from "./Post";
import db from "../firebase";





function Lostandfound() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);
  
  
  return (
    <div className = "outside">
    <div className = "header">
      <Nav_laf />
    </div>
    <div className = "content">
   
     <Content />
     {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))}
      
    </div>
    <h2> No reports to show</h2>
    </div>
   
  );
}

export default Lostandfound;

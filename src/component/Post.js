import "./Post.css";
// import { useState, useEffect } from "react";
import { isKeyExists } from "../util/checking";
import { Preview } from "../util/content";
import quq from "./quq-pink.svg";

export default function Post(props) {
  return (
    <div className="post-front">
      <div className="post">
        {/* <div className="min-profile">
          <img src={quq} className="profile-picture"></img>
          <div className="display-username">
            {((item) => isKeyExists("author", item) ? item.author : "Unkonwn")(props.item)}
          </div>
          <div className="display-tagfrom">{props.item.type}</div>
        </div> */}
        <div className="title">{props.item.title}</div>
        <div className="preview">{Preview(props.item.content)}</div>
      </div>
    </div>
  );
};
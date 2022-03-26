import "./Post.css";
import { isKeyExists } from "../util/checking";
import { Preview } from "../util/content";
import quq from "./quq-pink.svg";

export default function Post(props) {
  return (
    <div className="post-front">
      {[...props.items].map((context, index) => {
        return previewPost(context, index);
      })}
    </div>
  );
};

const previewPost = (c, k) => {
  return (
    <div key={k} className="post">
      <div>
      </div>
      <div>
        <h2 className="title">{c.title}</h2>
        <p className="preview">{c.context}</p>
      </div>
    </div>
  );
};
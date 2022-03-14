import "./Card.css";
import { useState, useEffect } from "react";
import { isKeyExists } from "../util/checking";
import Post from "./Post";

function pullData(setter) {
}

export default function Card(props) {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("http://192.168.1.101:8080/display")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setPosts(result.items);
  //     });
  // }, [props.ready]);

  return (
    <>
      <div className="card-front front">
        {/* {posts.map((v, i)=> <Post key={i} item={v}/>)} */}
        {props.ready}
      </div>
    </>
  );
};
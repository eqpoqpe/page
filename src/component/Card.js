import "./Card.css";
import React, { useState, useEffect, useReducer, useMemo } from "react";
import { isKeyExists } from "../util/checking";
import Post from "./Post";

function pullData(setter) {
}

export default function Card(props) {
  const [data, setData] = useState([]);
  // const path = useMemo();

  useEffect(() => {
    fetch(`https://eqpo.ml${props.ready}/display.json`)
      .then((response) => response.json())
      .then(
        (result) => { setData(result.display.items); },
        (error) => { setData([]); }
      );
  }, [props.ready]);

  return (
    <>
      <div className="card-front front">
        <Post items={data}/>
      </div>
    </>
  );
};

function Emp() {
  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
}
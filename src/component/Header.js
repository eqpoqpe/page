/**
 * Header.js - qaq
 * 
 * no keys checker
 * 
 * Copyright (c) 2022 Ryan Martin
 */

 import { useEffect, useState } from "react";
 import { isKeyExists } from "../util/checking";
 import "./Header.css";
 import quq from "./quq-pink.svg";
 
 /**
  * Protect Router
  * Load first value
  */
 export default function Header(props) {
  //  const [selector, setSelector] = useState(false);
  //  const [menu, setMenus] = useState([]);
  //  const [enable, setEnable] = useState(false);
  //  const [path, setPath] = useState(0);
  //  const [topics, setTopics] = useState(0);
 
   useEffect(() => {
     fetch("https://eqpo.ml/display.json")
       .then((response) => response.json())
       .then(
         (result) => {
           if (isKeyExists("items", result.display) &&
             ([...result.display.items].length !== 0)) {
             setEnable(true);
             setMenus(result.display.items);
             setTopics(result.display.items[0].topics);
             setPath(result.display.items[0].directory);
 
             // init router
             props.ready([topics, path]);
           }
         },
         (error) => { setEnable(false); }
       );
   }, []);
   useEffect(() => { if (path !== 0) props.ready([topics, path]); }, [path]);
 
   return (
     <div className="header">
       <div className="header-front">
         <div className="header-stuff">
           <img src={quq} className={"quq-logo"} onClick={() => { window.location.reload(); }}></img>
           <div className="menu-symbol" onClick={() => {
             if (enable) {
               if (selector) { setSelector(false); }
               else { setSelector(true); }
             }
           }}></div>
         </div>
         <div className={`selector ${(selector && enable) ? "eu" : "ru"}`}>
           <div className="selector-front">
             {menu.map((value, index) => {
               return (
                 <PageOne
                   key={index}
                   topics={value.topics}
                   path={value.directory}
                   modify={[setTopics, setPath]}
                 />
               )
             })}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 
 function PageOne(props) {
   const set = () => {
     props.modify[0](props.topics);
     props.modify[1](props.path);
   };
 
   return (
     <div onClick={() => { set() }} className={"selector-stuff"}>
       {props.topics}
     </div>
   );
 }
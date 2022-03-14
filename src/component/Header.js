import { useEffect, useState } from "react";
import { isKeyExists } from "../util/checking";
import "./Header.css";
import quq from "./quq.svg";

/**
 * Protect Router
 * Load first value
 */
export default function Header(props) {
  const [selector, setSelector] = useState(false);
  const [menu, setMenus] = useState([]);
  const [enable, setEnable] = useState(0);

  useEffect(() => {
    fetch("https://eqpo.ml/display.json")
      .then((response) => response.json())
      .then(
        (result) => {
          if (isKeyExists("items", result.display) &&
            ([...result.display.items].length !== 0)) {
            setEnable(true);
            setMenus(result.display.items);
          }
        },
        (error) => {
          setEnable(false);
        }
      );
  }, []);

  return (
    <div className="header">
      <div className="header-front">
        <div className="header-stuff">
          <img src={quq} className={"quq-logo"} onClick={() => { window.location.reload(); }}></img>
          <div className="menu-symbol" onClick={() => {
            if (enable && selector) setSelector(false);
            else setSelector(true);
          }}></div>
        </div>
        <div className={`selector ${(selector && enable) ? "eu" : "ru"}`}>
          <div className="selector-front">
            {menu.map((value, index) => <PageOne path={value} key={index} setPath={props.ready}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};


function PageOne(props) {
  const directory = isKeyExists("directory", props.path) ? props.path.directory : "";

  return (
    isKeyExists("topics", props.path) ?
      (<div onClick={() => {
        window.history.pushState({}, "", `#ʕ•́ᴥ•̀ʔっ♡${props.path.topics}`.toLowerCase());
        props.setPath(directory);
      }} className={"selector-stuff"}>{props.path.topics}</div>) : <div></div>
  );
}

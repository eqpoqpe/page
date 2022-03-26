import "./Viewmode.css";
import quq from "./quq-pink.svg";
import github from "./iconmonstr/github-1.svg";

export default function Viewmode(props) {
  return (
    <>
      <div className="viewmode box">
        <img src={quq} className="logo"></img>
        <div></div>
        <img src={github} className="logo"></img>
      </div>
    </>
  )
};

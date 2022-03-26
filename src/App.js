import "./App.css";
import Viewmode from "./component/Viewmode";
import Header from "./component/Header";
import Card from "./component/Card";
import { useEffect, useState } from "react";

export default function App() {
  const [nav, setNav] = useState(["eqpo", ""]);

  return (
    <div>
      <Viewmode />
      <Header ready={setNav} topics={nav[0]} />
      <Card ready={nav[1]} />
    </div>
  );
}
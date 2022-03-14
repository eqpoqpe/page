import "./App.css";
import Viewmode from "./component/Viewmode";
import Header from "./component/Header";
import Card from "./component/Card";
import { useState } from "react";

export default function App() {
  const [path, setPath] = useState(0);

  return (
    <div>
      <Viewmode />
      <Header ready={setPath} />
      <Card ready={path} />
    </div>
  );
}

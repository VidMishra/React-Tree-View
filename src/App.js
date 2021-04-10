import React from "react";
import "./styles.css";

import Tree from "./Tree/Tree";

const data = [{"name":"Investor A","files":[{"name":"Capital Calls","files":[{"name":"Level3a","files":[]},{"name":"Level3b","files":[]},{"name":"Level3c","files":[]}]},{"name":"Distribution Notices","files":[{"name":"Level3a","files":[]}]},{"name":"K1s","files":[]}]},{"name":"Investor B","files":[{"name":"Capital Calls","files":[]},{"name":"Distribution Notices","files":[]},{"name":"K1s","files":[]}]},{"name":"Investor C","files":[{"name":"Capital Calls","files":[]},{"name":"Distribution Notices","files":[]},{"name":"K1s","files":[]}]}];

export default function App() {

  const handleClick = (node) => {
    console.log("Clicked Node : ", node);
  };

  return (
    <div className="App">
      <Tree data={data} onNodeClick={handleClick} />
    </div>
  );
}

import React from "react";

import "../css/App.css";
import Hunter from "./combatants/characters/hunter";
import Terror from "./combatants/characters/terror";

const App = () => (
  <div className="container-fluid">
    <h1 className="text-center m-5">Battle Simulator</h1>
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm">
          <Hunter />
        </div>
        <div className="col-sm">col 2</div>
        <div className="col-sm">
          <Terror />
        </div>
      </div>
    </div>
  </div>
);

export default App;

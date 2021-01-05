import React from "react";

import "../css/index.css";
import Panel from "./central-panel/panel";
import Hunter from "./combatants/characters/hunter";
import Terror from "./combatants/characters/terror";
import { Characters } from "./combatants/contants";

const App = () => (
  <div className="container-fluid">
    <h1 className="text-center m-5">Battle Simulator</h1>
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm">
          <Hunter />
        </div>
        <div className="col-sm">
          <Panel characters={[Characters.Hunter, Characters.EldritchTerror]} />
        </div>
        <div className="col-sm">
          <Terror />
        </div>
      </div>
    </div>
  </div>
);

export default App;

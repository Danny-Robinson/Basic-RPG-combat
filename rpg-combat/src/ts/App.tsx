import React from "react";

import "../css/App.css";
import CharacterCard from "./combatants/character-card";
import hunter from "../assets/hunter.jpg";

const App = () => (
  <div className="container-fluid">
    <h1 className="text-center m-5">Battle Simulator</h1>
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm">
          <CharacterCard image={hunter} health={100} name="Player" />
        </div>
        <div className="col-sm">col 2</div>
        <div className="col-sm">
          <CharacterCard
            image={hunter}
            health={100}
            name="Monster"
            imageRight
          />
        </div>
      </div>
    </div>
  </div>
);

export default App;

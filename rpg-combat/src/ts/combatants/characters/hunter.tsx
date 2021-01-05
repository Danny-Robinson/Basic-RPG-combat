import React from "react";
import hunter from "../../../assets/hunter.jpg";
import CharacterCard from "../character-card";

const Hunter = () => (
  <CharacterCard image={hunter} health={100} name="Hunter" />
);

export default Hunter;

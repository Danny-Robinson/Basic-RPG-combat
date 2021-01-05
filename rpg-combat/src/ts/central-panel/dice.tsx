import React from "react";
import Die from "./die";

interface DieProps {
  values?: ReadonlyArray<number>;
}

const Dice = ({ values = [6, 6] }: DieProps) => (
  <>
    {values.map((value) => (
      <Die value={value} />
    ))}
  </>
);

export default Dice;

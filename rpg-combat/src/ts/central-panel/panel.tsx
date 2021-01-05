import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Characters } from "../combatants/contants";
import { StoreState } from "../redux-common/store";

import Attack from "./attack";
import Dice from "./dice";
import Feed from "./feed";

interface OwnProps {
  characters: ReadonlyArray<Characters>;
}

export type PanelProps = ConnectedProps<typeof connector> & OwnProps;

const Panel = ({ die0, die1, characters }: PanelProps) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <Dice values={die0} />
      </div>
      <div className="col">
        <Feed />
      </div>
      <div className="col">
        <Dice values={die1} />
      </div>
    </div>
    <div className="row justify-content-md-center">
      <Attack characters={characters} />
    </div>
  </div>
);

export const mapState = (state: StoreState, props: OwnProps) => ({
  die0: state?.characterDice[props.characters[0]],
  die1: state?.characterDice[props.characters[1]],
});

const connector = connect(mapState);

export default connector(Panel);

import React from "react";
import { connect, ConnectedProps } from "react-redux";

import hunter from "../../../assets/hunter.jpg";
import { StoreState } from "../../redux-common/store";
import CharacterCard from "../character-card";
import { Characters } from "../contants";

export type HunterProps = ConnectedProps<typeof connector>;

const Hunter = ({ health }: HunterProps) => (
  <CharacterCard image={hunter} health={health} name="Hunter" />
);

export const mapState = (state: StoreState) => ({
  health: state?.characterHealth[Characters.Hunter],
});

const connector = connect(mapState);

export default connector(Hunter);

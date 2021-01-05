import React from "react";
import { connect, ConnectedProps } from "react-redux";

import terror from "../../../assets/eldritch-terror.webp";

import { StoreState } from "../../redux-common/store";
import CharacterCard from "../character-card";
import { Characters } from "../contants";

export type TerrorProps = ConnectedProps<typeof connector>;

const Terror = ({ health }: TerrorProps) => (
  <CharacterCard
    image={terror}
    health={health}
    name={Characters.EldritchTerror}
    imageRight
  />
);

export const mapState = (state: StoreState) => ({
  health: state?.characterHealth[Characters.EldritchTerror],
});

const connector = connect(mapState);

export default connector(Terror);

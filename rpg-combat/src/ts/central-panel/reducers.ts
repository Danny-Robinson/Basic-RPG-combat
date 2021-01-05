import { defaultCharacterDice } from "../redux-common/default-store-state";
import { AppActions } from "../redux-common/types";
import {
  ASSIGN_DICE,
  CharacterDice,
  Feed,
  TOGGLE_CAN_ATTACK,
  WRITE_TO_FEED,
} from "./types";

export const feed = (state = [] as Feed, action: AppActions): Feed => {
  switch (action.type) {
    case WRITE_TO_FEED:
      const feed: Feed = [
        ...state,
        { message: action.message, colour: action.colour },
      ];
      return feed;
    default:
      return state;
  }
};

export const characterDice = (
  state = defaultCharacterDice,
  action: AppActions
): CharacterDice => {
  switch (action.type) {
    case ASSIGN_DICE:
      return { ...state, [action.character]: action.dice };
  }
  return state;
};

export const canAttack = (state = true, action: AppActions): Boolean => {
  switch (action.type) {
    case TOGGLE_CAN_ATTACK:
      return !state;
    default:
      return state;
  }
};

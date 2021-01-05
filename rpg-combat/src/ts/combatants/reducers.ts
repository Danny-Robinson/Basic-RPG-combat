import { defaultCharacterHealth } from "../redux-common/default-store-state";
import { AppActions } from "../redux-common/types";
import { CharacterHealth } from "./types";

export const characterHealth = (
  state = defaultCharacterHealth,
  action: AppActions
): CharacterHealth => {
  return state;
};

import { DEAL_DAMAGE } from "../central-panel/types";
import { defaultCharacterHealth } from "../redux-common/default-store-state";
import { AppActions } from "../redux-common/types";
import { CharacterHealth } from "./types";

export const characterHealth = (
  state = defaultCharacterHealth,
  action: AppActions
): CharacterHealth => {
  switch (action.type) {
    case DEAL_DAMAGE:
      const health = state[action.character] - action.damage;

      return {
        ...state,
        [action.character]: health < 0 ? 0 : health,
      };
  }
  return state;
};

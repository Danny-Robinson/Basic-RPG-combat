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
      return {
        ...state,
        [action.character]: state[action.character] - action.damage,
      };
  }
  return state;
};

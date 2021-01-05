import { Characters, DEFAULT_HEALTH_CAP } from "../combatants/contants";

export const defaultCharacterHealth = {
  [Characters.Hunter]: DEFAULT_HEALTH_CAP,
  [Characters.EldritchTerror]: DEFAULT_HEALTH_CAP,
};

export const defaultCharacterDice = {
  [Characters.Hunter]: [6, 6],
  [Characters.EldritchTerror]: [6, 6],
};

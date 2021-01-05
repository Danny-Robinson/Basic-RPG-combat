import { Characters } from "../combatants/contants";
import { AppActions } from "../redux-common/types";
import { ASSIGN_DICE, DEAL_DAMAGE, WRITE_TO_FEED } from "./types";

export const assignDice = (
  character: Characters,
  dice: ReadonlyArray<number>
): AppActions => ({
  type: ASSIGN_DICE,
  dice,
  character,
});

export const dealDamage = (
  character: Characters,
  damage: number
): AppActions => ({
  type: DEAL_DAMAGE,
  damage,
  character,
});

export const writeToFeed = (message: string, colour?: string): AppActions => ({
  type: WRITE_TO_FEED,
  message,
  colour,
});

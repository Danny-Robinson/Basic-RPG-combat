import { Characters } from "../combatants/contants";

export type Feed = ReadonlyArray<{ message: string; colour?: string }>;

export type CharacterDice = { [name in Characters]: ReadonlyArray<number> };

export const ASSIGN_DICE = "ASSIGN_DICE";
export const DEAL_DAMAGE = "DEAL_DAMAGE";
export const WRITE_TO_FEED = "WRITE_TO_FEED";

export interface AssignDiceAction {
  type: typeof ASSIGN_DICE;
  dice: ReadonlyArray<number>;
  character: Characters;
}

export interface DealDamageAction {
  type: typeof DEAL_DAMAGE;
  damage: number;
  character: Characters;
}

export interface WriteToFeedAction {
  type: typeof WRITE_TO_FEED;
  message: string;
  colour?: string;
}

export type CentralPanelActionTypes =
  | AssignDiceAction
  | DealDamageAction
  | WriteToFeedAction;

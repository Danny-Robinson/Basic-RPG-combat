import { combineReducers, createStore, applyMiddleware } from "redux";

import { AppActions, CLEAR_STORE } from "./types";
import * as combatantReducers from "../combatants/reducers";

const appReducer = combineReducers({
  ...combatantReducers,
});

export const rootReducer = (state: StoreState, action: AppActions) => {
  if (action.type === CLEAR_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export type StoreState = ReturnType<typeof appReducer> | undefined;
export const store = createStore(rootReducer);

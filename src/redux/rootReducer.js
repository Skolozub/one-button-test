import { combineReducers } from "redux";
import { cardsReducer } from "./reducers/cards";
import { testPassingReducer } from "./reducers/test-passing";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  testPassing: testPassingReducer
});

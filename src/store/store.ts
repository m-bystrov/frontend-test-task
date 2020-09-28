import { createStore, combineReducers } from "redux";

import { messagesReducer } from "./messages/reducer";
import { rateReducer } from "./rate/reducer";

const reducers = combineReducers({ rate: rateReducer, messages: messagesReducer });

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(reducers, {});

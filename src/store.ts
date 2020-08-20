import { createStore, combineReducers } from "redux";

const UPDATE_RATE = "UPDATE_RATE";

type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: string;
};

const rateReducer = (state = "0", action: UpdateRateAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reducers = combineReducers({ rate: rateReducer });

export const store = createStore(reducers, {});

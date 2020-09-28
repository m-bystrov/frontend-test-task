import { UPDATE_RATE } from "./actionsTypes";
import { UpdateRateAction } from "./actions";

export const rateReducer = (state = 0, action: UpdateRateAction): number => {
    switch (action.type) {
        case UPDATE_RATE:
            return action.payload;
        default:
            return state;
    }
};

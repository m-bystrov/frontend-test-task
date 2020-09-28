import { UPDATE_RATE } from "./actionsTypes";

export type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: number;
};

export function updateRate(rate: number): UpdateRateAction {
    return {
        type: UPDATE_RATE,
        payload: rate,
    };
}

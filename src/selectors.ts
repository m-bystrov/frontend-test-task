import { createSelector } from "reselect";

import { RootState } from "./store/store";

const getRate = (state: RootState) => state.rate;
const getMessages = (state: RootState) => state.messages;

export const getMsgsWithCalculatedUSD = createSelector(
    [getRate, getMessages],
    (rate, messages) => ({
        loading: messages.loading,
        data: messages.data.map((msg) => ({
            ...msg,
            USDAmount: msg.btcAmount ? msg.btcAmount * rate : 0,
        })),
    }),
);

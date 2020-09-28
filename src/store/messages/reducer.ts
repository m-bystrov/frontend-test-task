import { ApiMessage } from "../../types";
import { messageToInsert } from "../../data-mocks/messages";
import { Actions } from "./actions";
import {
    ADD_SERVICE_MESSAGE,
    DELETE_MESSAGE,
    FETCH_MESSAGES,
    FETCH_MESSAGES_SUCCESS,
} from "./actionsTypes";

export type MessagesState = {
    data: ApiMessage[];
    loading: boolean;
};

const initialState: MessagesState = {
    data: [],
    loading: false,
};

export const messagesReducer = (state = initialState, action: Actions): MessagesState => {
    switch (action.type) {
        case FETCH_MESSAGES:
            return { ...state, loading: true };
        case FETCH_MESSAGES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case DELETE_MESSAGE:
            return {
                ...state,
                data: state.data.filter((msg, index) => index !== action.payload),
            };
        case ADD_SERVICE_MESSAGE:
            return {
                ...state,
                data: [
                    ...state.data.slice(0, action.payload),
                    {
                        ...messageToInsert,
                        id: Math.random() * (state.data.length + 100),
                    },
                    ...state.data.slice(action.payload),
                ],
            };
        default:
            return state;
    }
};

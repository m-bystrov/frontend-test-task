import { ApiMessage } from "../../types";
import {
    FETCH_MESSAGES,
    FETCH_MESSAGES_SUCCESS,
    DELETE_MESSAGE,
    ADD_SERVICE_MESSAGE,
} from "./actionsTypes";

type FetchMessagesAction = {
    type: typeof FETCH_MESSAGES;
};

type FetchMessagesSuccessAction = {
    type: typeof FETCH_MESSAGES_SUCCESS;
    payload: ApiMessage[];
};

type DeleteMessageAction = {
    type: typeof DELETE_MESSAGE;
    payload: number;
};

type AddServiceMessageAction = {
    type: typeof ADD_SERVICE_MESSAGE;
    payload: number;
};

export function fetchMessages(): FetchMessagesAction {
    return {
        type: FETCH_MESSAGES,
    };
}

export function successFetchMessages(msgs: ApiMessage[]): FetchMessagesSuccessAction {
    return {
        type: FETCH_MESSAGES_SUCCESS,
        payload: msgs,
    };
}

export function deleteMessage(index: number): DeleteMessageAction {
    return {
        type: DELETE_MESSAGE,
        payload: index,
    };
}

export function addServiceMessage(index: number): AddServiceMessageAction {
    return {
        type: ADD_SERVICE_MESSAGE,
        payload: index,
    };
}

export type Actions =
    | FetchMessagesAction
    | FetchMessagesSuccessAction
    | DeleteMessageAction
    | AddServiceMessageAction;

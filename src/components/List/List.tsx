/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";

import { ApiMessageWithUSD } from "../../types";
import { Message } from "../common/Message";
import { addServiceMessage, deleteMessage } from "../../store/messages/actions";

import "./List.css";

type ListProps = {
    data: ApiMessageWithUSD[];
};

export const List: React.FC<ListProps> = ({ data }): React.ReactElement => {
    const dispatch = useDispatch();

    function handleDelete(index: number) {
        dispatch(deleteMessage(index));
    }

    function handleAddServiceMsg(index: number) {
        dispatch(addServiceMessage(index + 1));
    }

    return (
        <div className="list">
            {data.map((msg, index) => (
                <Message
                    key={msg.id}
                    index={index}
                    onDelete={handleDelete}
                    onServiceAdd={handleAddServiceMsg}
                    {...msg}
                />
            ))}
        </div>
    );
};

/* eslint-disable react/prop-types */
import React from "react";

import { MESSAGE_TYPES } from "../../constants";
import { ApiMessageWithUSD } from "../../types";

import "./Message.css";

type MessageCustomProps = {
    onDelete: (index: number) => void;
    onServiceAdd: (index: number) => void;
    index: number;
};

type MessageProps = ApiMessageWithUSD & MessageCustomProps;

function typesToStyles(type: string) {
    switch (type) {
        case MESSAGE_TYPES.custom:
            return {
                accent: "grey",
                background: "light-grey",
            };
        case MESSAGE_TYPES.single:
            return {
                accent: "aqua",
                background: "light-blue",
            };
        case MESSAGE_TYPES.multiple:
            return {
                accent: "blue",
                background: "light-blue",
            };
        default:
            return {
                accent: "blue",
                background: "light-blue",
            };
    }
}

export const Message: React.FC<MessageProps> = ({
    index,
    messageType,
    USDAmount,
    canDelete,
    text,
    messageContent,
    onServiceAdd,
    onDelete,
}): React.ReactElement => {
    const { accent, background } = typesToStyles(messageType);

    function getMessageContent() {
        switch (messageType) {
            case MESSAGE_TYPES.multiple:
                return (
                    Array.isArray(messageContent) &&
                    messageContent.map(({ source, amount }, index) => (
                        <div className="msg-content-row" key={index}>
                            <span>{source}</span>
                            <span>{amount}</span>
                        </div>
                    ))
                );
            default:
                return <span>{messageContent}</span>;
        }
    }

    return (
        <div className={`msg-container msg-background-${background} msg-border-${accent}`}>
            <span className="msg-title">{text}</span>
            {canDelete && (
                <button className="msg-delete-btn" onClick={() => onDelete(index)}>
                    X
                </button>
            )}
            <div className="msg-content">{getMessageContent()}</div>
            <div className="msg-footer">
                {messageType !== MESSAGE_TYPES.custom && (
                    <button
                        className={`msg-service-btn msg-border-${accent}`}
                        onClick={() => onServiceAdd(index)}
                    >
                        Add service message
                    </button>
                )}

                {!!USDAmount && (
                    <span className={`msg-amount msg-background-${accent}`}>
                        {USDAmount.toFixed(2)} USD
                    </span>
                )}
            </div>
        </div>
    );
};

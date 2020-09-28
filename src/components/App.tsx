import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRate } from "../useRate";
import { List } from "./List/List";
import { updateRate } from "../store/rate/actions";
import { getMessagesList } from "../fakeApi";
import { fetchMessages, successFetchMessages } from "../store/messages/actions";
import { getMsgsWithCalculatedUSD } from "../selectors";

import "./App.css";

export const App: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector(getMsgsWithCalculatedUSD);

    const onLoad = useCallback(
        (rate: number) => {
            dispatch(updateRate(rate));
        },
        [dispatch],
    );

    const isReadyToRender = useRate(onLoad);

    useEffect(() => {
        async function prepareMessages() {
            dispatch(fetchMessages());
            getMessagesList().subscribe((data) => {
                dispatch(successFetchMessages(data));
            });
        }

        prepareMessages();
    }, [dispatch]);

    return (
        <div className="container">
            <article className="content">
                {isReadyToRender && !loading ? (
                    <List data={data} />
                ) : (
                    <div className="loader-container">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                )}
            </article>
            <header className="header" />
            <footer className="footer" />
        </div>
    );
};

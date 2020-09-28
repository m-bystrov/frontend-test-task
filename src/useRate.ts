import { useEffect, useState } from "react";
import { interval } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { CoinDeskMessage } from "./types";

const fetchUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
const poolingInterval = 10000;

type onLoad = (rate: number) => void;

export const useRate = (onLoad: onLoad): boolean => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        interval(poolingInterval)
            .pipe(
                mergeMap(() =>
                    fetch(fetchUrl)
                        .then((data) => {
                            setIsLoaded(true);
                            return data.json();
                        })
                        .then((parsedData: CoinDeskMessage) => {
                            onLoad(parsedData.bpi.USD.rate_float);
                        }),
                ),
            )
            .subscribe((data) => {
                data;
            });
    }, [onLoad]);

    return isLoaded;
};

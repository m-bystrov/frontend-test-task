export type CoinDeskMessage = {
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
    };
    disclaimer: string;
    bpi: {
        USD: {
            code: string;
            rate: string;
            description: string;
            rate_float: number;
        };
    };
};

export type ApiMessage = {
    id: number;
    text: string;
    canDelete: boolean;
    btcAmount?: number;
    messageContent: { source: string; amount: number }[] | string;
    messageType: string;
};

export type ApiMessageWithUSD = ApiMessage & {
    USDAmount?: number;
};

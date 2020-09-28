import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

import { shuffledMessageList } from "./data-mocks/messages";
import { ApiMessage } from "./types";

export const getMessagesList = (): Observable<ApiMessage[]> =>
    of(shuffledMessageList).pipe(delay(100));

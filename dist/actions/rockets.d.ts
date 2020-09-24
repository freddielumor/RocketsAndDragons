export declare const GET_ROCKETS_DATA_START = "GET_ROCKETS_DATA_START";
export declare const GET_ROCKETS_DATA_SUCCESS = "GET_ROCKETS_DATA_SUCCESS";
export declare const GET_ROCKETS_DATA_ERROR = "GET_ROCKETS_DATA_ERROR";
export declare const getRocketsDataStart: () => {
    type: string;
};
export declare const getRocketsDataSuccess: (payload: any) => {
    type: string;
    payload: any;
};
export declare const getRocketsDataError: (payload: any) => {
    type: string;
    payload: any;
};

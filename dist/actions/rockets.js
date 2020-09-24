export var GET_ROCKETS_DATA_START = "GET_ROCKETS_DATA_START";
export var GET_ROCKETS_DATA_SUCCESS = "GET_ROCKETS_DATA_SUCCESS";
export var GET_ROCKETS_DATA_ERROR = "GET_ROCKETS_DATA_ERROR";
export var getRocketsDataStart = function () {
    return {
        type: GET_ROCKETS_DATA_START,
    };
};
export var getRocketsDataSuccess = function (payload) {
    return {
        type: GET_ROCKETS_DATA_SUCCESS,
        payload: payload,
    };
};
export var getRocketsDataError = function (payload) {
    return {
        type: GET_ROCKETS_DATA_ERROR,
        payload: payload,
    };
};
//# sourceMappingURL=rockets.js.map
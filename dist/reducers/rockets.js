var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { GET_ROCKETS_DATA_START, GET_ROCKETS_DATA_SUCCESS, GET_ROCKETS_DATA_ERROR, } from "../actions/rockets";
var initialState = {
    rockets: [],
    rocketsLoaded: false,
};
export default function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case GET_ROCKETS_DATA_START:
            return __assign({}, state);
        case GET_ROCKETS_DATA_SUCCESS:
            return __assign(__assign({}, state), { rockets: action.payload, rocketsLoaded: true });
        case GET_ROCKETS_DATA_ERROR:
            return __assign(__assign({}, state), { requestingMovieDataError: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=rockets.js.map
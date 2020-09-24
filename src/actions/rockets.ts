export const GET_ROCKETS_DATA_START = "GET_ROCKETS_DATA_START";
export const GET_ROCKETS_DATA_SUCCESS = "GET_ROCKETS_DATA_SUCCESS";
export const GET_ROCKETS_DATA_ERROR = "GET_ROCKETS_DATA_ERROR";

export const getRocketsDataStart = () => {
  return {
    type: GET_ROCKETS_DATA_START,
  };
};

export const getRocketsDataSuccess = (payload: any) => {
  return {
    type: GET_ROCKETS_DATA_SUCCESS,
    payload,
  };
};

export const getRocketsDataError = (payload: any) => {
  return {
    type: GET_ROCKETS_DATA_ERROR,
    payload,
  };
};

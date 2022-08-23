export const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export const ReducerA = (state, action) => {
  switch (action.type) {
    case "LOGIN_STARTA":
      return {
        admin: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESSA":
      return {
        admin: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILUREA":
      return {
        admin: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUTA":
      return {
        admin: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

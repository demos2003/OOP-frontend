import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { ReducerA } from "./Reducer";
import { useEffect } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

const INITIAL_STATEA = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);
export const ContextA = createContext(INITIAL_STATEA);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const ContextProviderA = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerA, INITIAL_STATEA);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);
  return (
    <ContextA.Provider
      value={{
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ContextA.Provider>
  );
};

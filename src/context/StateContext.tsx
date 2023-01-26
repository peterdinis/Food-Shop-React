import React, { createContext, useContext, useReducer } from "react";
import { InitialStateI } from "../typings/reduxTypings";

interface IStateContextProps {
  reducer: any;
  initialState: InitialStateI;
  children?: React.ReactNode;
}

export const StateContext = createContext(null);

export const useStateValue = () => useContext(StateContext);

export const StateProvider = ({
  children,
  initialState,
  reducer,
}: IStateContextProps) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState) as any}>
      {children}
    </StateContext.Provider>
  );
};
import React, { createContext, useContext, useReducer } from "react";
import { InitialStateI } from "../typings/reduxTypings";

interface IStateContextProps {
  reducer: any;
  initialState: InitialStateI;
  children?: React.ReactNode;
}

export const CardContext = createContext(null);

export const useCardValue = () => useContext(CardContext);

export const CardProvider = ({
  children,
  initialState,
  reducer,
}: IStateContextProps) => {
  return (
    <CardContext.Provider value={useReducer(reducer, initialState) as any}>
      {children}
    </CardContext.Provider>
  );
};
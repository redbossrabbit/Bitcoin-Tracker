import React from "react";

export interface IAction {
  type: string;
  payload?: object;
}
export interface IStore {
  value: number;
  fetchedData: any;
}
export interface IStoreContext {
  store: IStore;
  dispatch: React.Dispatch<IAction> | Function;
}

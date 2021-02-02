import React from "react";

export interface IAction {
  type: string;
}
export interface IStore {
  app: number;
}
export interface IStoreContext {
  store: IStore;
  dispatch: React.Dispatch<IAction> | Function;
}

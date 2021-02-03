import React from "react";

export interface IResponse {
  description: string;
  rate_float: number;
}
export interface IAction {
  type: string;
  payload?: IResponse;
}
export interface IStore {
  value: number;
  fetchedData: any;
}
export interface IStoreContext {
  store: IStore;
  dispatch?: React.Dispatch<IAction>;
}

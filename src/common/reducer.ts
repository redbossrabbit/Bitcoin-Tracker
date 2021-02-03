import React from "react";

//interfaces
import { IStoreContext, IAction } from "../utils/interfaces";

const reducer: React.Reducer<IStoreContext, IAction> = (
  state,
  action
): IStoreContext => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        store: { ...state.store, value: (state.store.value += 1) }
      };
    case "FETCH_DATA":
      return {
        ...state,
        store: { ...state.store, fetchedData: { ...action.payload } }
      };
    default:
      return state;
  }
};
export default reducer;

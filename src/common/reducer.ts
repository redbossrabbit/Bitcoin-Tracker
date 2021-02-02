import React from "react";
import { IStoreContext, IAction } from "../utils/interfaces";

const reducer: React.Reducer<IStoreContext, IAction> = (
  state,
  action
): IStoreContext => {
  switch (action.type) {
    case "CLICK":
      return { ...state, store: { app: (state.store.app += 1) } };

    default:
      return state;
  }
};
export default reducer;

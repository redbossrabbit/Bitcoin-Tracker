import React from "react";

//actions
import * as actions from "../common/actions";

//interfaces
import { IStoreContext, IAction } from "../utils/interfaces";

const reducer: React.Reducer<IStoreContext, IAction> = (
  state,
  action
): IStoreContext => {
  switch (action.type) {
    case actions.CLICK:
      return {
        ...state,
        store: { ...state.store, value: (state.store.value += 1) }
      };
    case actions.FETCH_DATA:
      return {
        ...state,
        store: { ...state.store, fetchedData: { ...action.payload } }
      };
    default:
      return state;
  }
};
export default reducer;

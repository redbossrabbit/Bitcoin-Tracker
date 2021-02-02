import { IStoreContext, IStore } from "../utils/interfaces";

const Store: IStore = { app: 2 };

const StoreContext: IStoreContext = {
  store: Store,
  dispatch: () => {}
};

export default StoreContext;

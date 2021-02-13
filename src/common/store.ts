//interfaces
import { IStoreContext, IStore } from "../utils/interfaces";

const store: IStore = { value: 2, fetchedData: {} };

const StoreContext: IStoreContext = {
  store: store,
  dispatch: () => {}
};

export default StoreContext;

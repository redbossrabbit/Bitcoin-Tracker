import React, { useReducer } from "react";

//state management
import { IStoreContext } from "./utils/interfaces";
import reducer from "./common/reducer";
import StoreContext from "./common/store";

//components
import Display from "./components/Display";

export const AppContext: React.Context<IStoreContext> = React.createContext(
  StoreContext
);

const App = () => {
  const [state, dispatch] = useReducer(reducer, StoreContext);
  const contextValue = { ...state, dispatch: dispatch };
  return (
    <div>
      <button onClick={() => dispatch({ type: "CLICK" })}>
        click to update
      </button>
      <AppContext.Provider value={contextValue}>
        <Display {...contextValue} />
      </AppContext.Provider>
    </div>
  );
};
export default App;

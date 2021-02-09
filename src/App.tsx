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

const App: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, StoreContext);
  const contextValue = { ...state, dispatch: dispatch };
  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <button onClick={() => dispatch({ type: "CLICK" })}>
          click to update
        </button>
        <Display {...contextValue} />
      </div>
    </AppContext.Provider>
  );
};
export default App;

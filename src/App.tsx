import React, { useReducer } from "react";
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

  return (
    <AppContext.Provider value={{ ...state, dispatch: dispatch }}>
      <div>
        <button onClick={() => dispatch({ type: "CLICK" })}>
          click to update
        </button>
        <Display {...state} />
      </div>
    </AppContext.Provider>
  );
};
export default App;

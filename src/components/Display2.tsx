import React, { useContext } from "react";
import { AppContext } from "../App";

export const Display2: React.FC = (): JSX.Element => {
  const display = useContext(AppContext);

  return (
    <div>
      <div>{display.store.app}</div>
      <button onClick={() => display.dispatch({ type: "CLICK" })}>
        Change display 2
      </button>
    </div>
  );
};
export default Display2;

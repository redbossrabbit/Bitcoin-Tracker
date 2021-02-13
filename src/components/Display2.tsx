import React, { useContext } from "react";

//context
import { AppContext } from "../App";

export const Display2 = () => {
  const { store, dispatch } = useContext(AppContext);

  return (
    <div>
      <div>{store.value}</div>
      <button onClick={() => dispatch({ type: "CLICK" })}>
        Change display 2
      </button>
    </div>
  );
};
export default Display2;

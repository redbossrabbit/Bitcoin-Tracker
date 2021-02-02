import React from "react";
import { IStoreContext } from "../utils/interfaces";

//components
import Display2 from "./Display2";

export const Display: React.FC<IStoreContext> = ({ store }): JSX.Element => {
  return (
    <div>
      <div>{store.app}</div>
      <Display2 />
    </div>
  );
};
export default Display;

import React, { useEffect, useCallback } from "react";

//fetch
import fetchData from "../common/fetchData";

//interfaces
import { IStoreContext, IResponse } from "../utils/interfaces";

//components
import Display2 from "./Display2";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const Display: React.FC<IStoreContext> = ({ store, dispatch }) => {
  const handleFetch = useCallback(() => {
    fetchData(url)
      .then((res: IResponse) => {
        dispatch({ type: "FETCH_DATA", payload: res });
      })
      .catch(err => {
        throw new Error().stack;
      });
  }, [dispatch]);

  useEffect(() => {
    if (!store.fetchedData.bpi) {
      handleFetch();
      return;
    }
    const timeout = setTimeout(() => {
      handleFetch();
    }, 30000);
    return () => clearTimeout(timeout);
  }, [store.fetchedData, handleFetch]);

  return (
    <div>
      <div>{store.value}</div>
      <Display2 />
      <p>
        {store.fetchedData.bpi
          ? store.fetchedData.bpi.USD.rate_float
          : "LOADING..."}
      </p>
    </div>
  );
};
export default Display;

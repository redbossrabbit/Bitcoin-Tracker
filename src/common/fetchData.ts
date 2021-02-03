// const url: string = "https://api.coindesk.com/v1/bpi/currentprice.json";
import { IResponse } from "../utils/interfaces";

const fetchData = (url: string): Promise<IResponse> => {
  return fetch(url)
    .then(res => res.json())
    .catch((err: Error) => {
      throw new Error().stack;
    });
};
export default fetchData;

// const url: string = "https://api.coindesk.com/v1/bpi/currentprice.json";
import { IResponse } from "../utils/interfaces";

const fetchData = async (url: string): Promise<IResponse> => {
  const data = await fetch(url);
  return await data.json();
};
export default fetchData;

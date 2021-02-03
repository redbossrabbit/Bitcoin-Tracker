// const url: string = "https://api.coindesk.com/v1/bpi/currentprice.json";

const fetchData = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      throw new Error().stack;
    });
};
export default fetchData;

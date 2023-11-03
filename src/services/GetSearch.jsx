// import { useQuery } from "@tanstack/react-query";
import { httpbinar } from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

export const reduxSearchMovie = async (page, query) => {
  const { data } = await httpbinar.get(`${API_ENDPOINT.GET_SEARCH}?page=${page}&query=${query}`);
  return data;
};

// const fetchDataSearch = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;

//   const { data } = await httpbinar.get(_key, { params: _params });
//   return data;
// };

// const useDataQuerySearch = (options) => {
//   return useQuery([API_ENDPOINT.GET_SEARCH, options], fetchDataSearch);
// };

// export { fetchDataSearch, useDataQuerySearch };

import { useQuery } from "@tanstack/react-query";
import { http } from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

export const reduxDataMovieNowPlaying = async () => {
  return await http.get(API_ENDPOINT.GET_NOW_PLAYING);
};

const fetchDataNowPlaying = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataQueryNowPlaying = (options) => {
  return useQuery([API_ENDPOINT.GET_NOW_PLAYING, options], fetchDataNowPlaying);
};

export { fetchDataNowPlaying, useDataQueryNowPlaying };

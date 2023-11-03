import { useQuery } from "@tanstack/react-query";
import { http } from "../utils/Http";

const fetchDataTrailers = async ({ queryKey }) => {
  const [{ movie_id, language }] = queryKey;
  const url = `${process.env.REACT_APP_SERVER}/movie/${movie_id}/videos?language=${language}`;

  const { data } = await http.get(url);
  return data;
};

const useDataQueryTrailers = (options) => {
  return useQuery([options], fetchDataTrailers);
};

export { fetchDataTrailers, useDataQueryTrailers };

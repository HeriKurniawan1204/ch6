import { useQuery } from "@tanstack/react-query";
import { httpbinar } from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

export const reduxGetMe = async () => {
  return await httpbinar.get(API_ENDPOINT.GET_ME);
};

const fetchDataQueryMe = async () => {
  return await httpbinar
    .get(API_ENDPOINT.GET_ME)
    .then((result) => {
      const resultMe = result.data.data;
      return resultMe;
    })
    .catch((err) => {
      if (err) {
        window.location.href = "/";
      }
    });
};

const useDataMe = () => {
  return useQuery([API_ENDPOINT.GET_ME], fetchDataQueryMe);
};

export { useDataMe, fetchDataQueryMe };

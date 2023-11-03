import { useMutation } from "@tanstack/react-query";
import { httpbinar } from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { CookieStorage, CookiesKeys } from "../utils/cookies";

const fetchGoogleAuth = async (input) => {
  return await httpbinar
    .post(API_ENDPOINT.GOOGLE_OAUTH, input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      window.location.href = "/home";
    })
    .catch((err) => {
      if (err.response.status === 400 || err.response.status === 401) {
        return err.response.data.message;
      }
    });
};

const useGoogleAuth = () => {
  return useMutation(fetchGoogleAuth);
};

export { useGoogleAuth, fetchGoogleAuth };

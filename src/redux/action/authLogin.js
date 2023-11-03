import { reduxGetMe, reduxGetUser } from "../../services/GetMe";
import { reduxLoginUser } from "../../services/LoginUser";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { setDataMeReducer } from "../reducers/auth/authGetUser";
import { setIsLoggedIn, setToken } from "../reducers/auth/authLoginSlicer";

export const loginUser = (input) => (dispatch) => {
  reduxLoginUser(input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      window.location.href = "/home";
    })
    .catch((err) => {});
};

export const logOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  dispatch(setIsLoggedIn(false));
  CookieStorage.remove(CookiesKeys.AuthToken);
  window.location.href = "/";
};

export const GetMeAction = () => (dispatch) => {
  reduxGetMe()
    .then((result) => {
      console.log("reduxGetMe -> result :", result);
      dispatch(setDataMeReducer(result.data.data));
    })
    .catch((err) => {
      console.error("reduxGetMe -> error:", err);
    });
};

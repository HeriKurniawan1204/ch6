import { combineReducers } from "redux";
import authLoginSlicer from "./auth/authLoginSlicer";
import authMovie from "./auth/authMovie";
import authGetUser from "./auth/authGetUser";

export default combineReducers({
  auth: authLoginSlicer,
  movie: authMovie,
  getme: authGetUser,
  // rating: authRatingSlice,
});

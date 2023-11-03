import { reduxDataDetailMovie } from "../../services/GetDetails";
import { setDetailMovie } from "../reducers/auth/authMovie";

export const DetailMovie = (id) => (dispatch) => {
  return reduxDataDetailMovie(id)
    .then((result) => {
      return dispatch(setDetailMovie(result));
    })
    .catch((err) => {});
};

import { reduxDataMoviePopular } from "../../services/GetPopular";
import { setDataMoviePopular } from "../reducers/auth/authMovie";

export const DataMoviePopular = () => (dispatch) => {
  reduxDataMoviePopular()
    .then((result) => {
      dispatch(setDataMoviePopular(result.data.data));
      // console.log(result);
    })
    .catch((err) => {});
};

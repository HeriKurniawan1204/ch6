import { reduxSearchMovie } from "../../services/GetSearch";
import { setSearchMovie } from "../reducers/auth/authMovie";

export const DataSearchMovie = (page, query) => async (dispatch) => {
  console.log(page, query, "Ini data");
  return reduxSearchMovie(page, query)
    .then((result) => {
      dispatch(setSearchMovie(result));
      console.log(result, "Hasil");
    })
    .catch((err) => {});
};

export default DataSearchMovie;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataMoviePopular: [],
  dataDetailMovie: [],
  dataSearchMovie: [],
};

const authMovie = createSlice({
  name: "authMovie",
  initialState,
  reducers: {
    setDataMoviePopular: (state, action) => {
      state.dataMoviePopular = action.payload;
    },
    setDetailMovie: (state, action) => {
      state.dataDetailMovie = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.dataSearchMovie = action.payload;
    },
  },
});

export const { setDataMoviePopular, setDetailMovie, setSearchMovie } = authMovie.actions;

export default authMovie.reducer;

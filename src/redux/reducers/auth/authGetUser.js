import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataMe: {},
};

const authGetMeSlice = createSlice({
  name: "authGetMe",
  initialState,
  reducers: {
    setDataMeReducer: (state, action) => {
      state.dataMe = action.payload;
      console.log("dataMe -> setDataMeReducer:", action.payload);
    },
  },
});

export const { setDataMeReducer } = authGetMeSlice.actions;

export default authGetMeSlice.reducer;

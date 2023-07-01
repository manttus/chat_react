import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  _id: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  groups: [];
};

const initialState: InitialState = {
  _id: null,
  username: null,
  email: null,
  image: null,
  groups: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: InitialState, action) => {
      state.username = action.payload.data.username;
      state.email = action.payload.data.email;
      state._id = action.payload.data._id;
      state.image = action.payload.data.image;
      state.groups = action.payload.data.groups;
    },
    logOut: (state) => {
      state = initialState;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOut } = authSlice.actions;

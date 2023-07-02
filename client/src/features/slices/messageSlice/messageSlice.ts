import { createSlice } from "@reduxjs/toolkit";

type MessagesType = {
  message: string;
  sender: string;
  receiver: string;
};

type InitialState = {
  _id: string | null;
  username: string | null;
  email: string | null;
  messages: MessagesType[];
  image: string | null;
};

const initialState: InitialState = {
  _id: null,
  username: null,
  email: null,
  image: null,
  messages: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setSelected: (state: InitialState, action) => {
      console.log(action.payload);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.image = action.payload.image;
    },
    clearSelected: (state: InitialState) => {
      state = initialState;
    },
  },
});

export default messageSlice.reducer;
export const { setSelected } = messageSlice.actions;

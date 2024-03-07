import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = true;
      state.token = undefined;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;

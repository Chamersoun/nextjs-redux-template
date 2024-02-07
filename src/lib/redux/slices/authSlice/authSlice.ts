/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { signInAsync } from "./thunks";

import { IUser } from "@/types/auth";

const initialState: AuthSliceState = {
  user: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.status = "idle";

        if ("message" in action.payload) {
          state.error = action.payload.message;
        } else {
          state.user = action.payload;
          localStorage.setItem("user", JSON.stringify(action.payload));
          localStorage.setItem("token", JSON.stringify(action.payload.token));
        }
      });
  },
});

export interface AuthSliceState {
  user: IUser | null;
  status: "idle" | "loading";
  error: null | string;
}

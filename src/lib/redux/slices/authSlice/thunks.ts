/* Instruments */
import { postSignIn } from "./postSignIn";

import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";

export const signInAsync = createAppAsyncThunk(
  "auth/postSignIn",
  async ({ email, password }: { email: string; password: string }) => {
    // The value we return becomes the `fulfilled` action payload
    return await postSignIn({
      email,
      password,
    });
  }
);

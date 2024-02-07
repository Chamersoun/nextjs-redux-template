import type { ReduxState } from "@/lib/redux";

export const selectUser = (state: ReduxState) => state.auth.user;
export const selectAuthMeta = (state: ReduxState) => {
  return {
    status: state.auth.status,
    error: state.auth.error,
  };
};

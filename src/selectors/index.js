import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

export const isAuthSelector = createSelector(
  baseSelector,
  (auth) => auth.isAuth
);

export const isLoadingSelector = createSelector(
  baseSelector,
  (auth) => auth.isLoading
);

export const errorAuthSelector = createSelector(
  baseSelector,
  (auth) => auth.error
);

export const accountProfileDataSelector = createSelector(
  baseSelector,
  (auth) => auth.profileData
);

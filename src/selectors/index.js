// export const isAuthSelector = (state) => state.auth.isAuth;
// export const errorAuthSelector = (state) => state.error;
// export const userAccountAuthSelector = (state) => state.auth;

import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

export const isAuthSelector = createSelector(
  baseSelector,
  (auth) => auth.isAuth
);

export const errorAuthSelector = createSelector(
  baseSelector,
  (auth) => auth.error
);

export const accountProfileDataSelector = createSelector(
  baseSelector,
  (auth) => auth.profileData
);

import { createAction, createSelector } from "@reduxjs/toolkit";


export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;
export const selectIsRefreshing = (state)=> state.auth.isRefreshing;

export const selectUserEmail = createSelector(
  [selectUser],
  (user) => user.email
);


const logoutUserAction = createAction('auth/logout');

export const logoutUser = () => (dispatch) => {
  dispatch(logoutUserAction());
};
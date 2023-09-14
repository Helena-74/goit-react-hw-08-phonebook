import { createAction, createSelector } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import { selectUser, selectIsLoggedIn, selectIsRefreshing } from 'redux/selectors';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilter = (state) => state.filter;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserEmail = createSelector(
  [selectUser],
  (user) => user.email
);


const logoutUserAction = createAction('auth/logout');

export const logoutUser = () => (dispatch) => {
  dispatch(logoutUserAction());
};



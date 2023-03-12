import { createSelector } from "reselect";

const userSelector = (state) => state.users;

const getUsers = (stateData) => {
  return {
    users: stateData.users,
    loading: stateData.loading,
    error: stateData.error,
  };
};

export default createSelector(
  userSelector, // all the arguments before the last are calculated and passed to the last argument as function argument
  getUsers // last argument is a the function that has our select logic
);

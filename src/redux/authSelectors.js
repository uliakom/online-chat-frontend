export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectErrorCode = state => state.auth.errorCode;
export const selectVerifyErrorCode = state => state.auth.verifyErrorCode;
export const getUserToken = state => state.auth.token;
export const isVerifiedUser = state => state.auth.user.verify;


const authSelectors = {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectErrorCode,
  selectVerifyErrorCode,
    getUserToken,
  isVerifiedUser
};

export default authSelectors;
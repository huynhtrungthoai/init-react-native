import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  signInEmailRequest: ['userData'],
  signInEmailSuccess: ['data'],
  signInEmailFailure: ['signInEmailError'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

interface UserStateTypes {
  merge: (params: object) => any;
}

export const INITIAL_STATE: UserStateTypes = Immutable({});

/* ------------- Reducers ------------- */
// export const checkAuthTokenRequest = state => {
//   return state.merge({
//     fetchingCheckAuthToken: true,
//     errorCheckAuthToken: null,
//   });
// };
// export const checkAuthTokenSuccess = (state, {userData}) =>
//   state.merge({
//     fetchingCheckAuthToken: false,
//     loginStatus: true,
//     userProfile: userData,
//   });
// export const checkAuthTokenFailure = (state, {errorCheckAuthToken}) =>
//   state.merge({fetchingCheckAuthToken: false, errorCheckAuthToken});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  //   [Types.SIGN_IN_EMAIL_REQUEST]: signInEmailRequest,
  //   [Types.SIGN_IN_EMAIL_SUCCESS]: signInEmailSuccess,
  //   [Types.SIGN_IN_EMAIL_FAILURE]: signInEmailFailure,
});

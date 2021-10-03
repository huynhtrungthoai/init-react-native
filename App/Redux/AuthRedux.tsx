import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  signInRequest: ['signInData'],
  signInSuccess: ['profileData'],
  signInFailure: ['errorSignIn'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

interface AuthStateTypes {
  merge: (params: object) => any;
  // userProfile: any;
  //
  // isFetchingSignIn: boolean;
  // errorSignIn: any;
}

export const INITIAL_STATE: AuthStateTypes = Immutable({
  // userProfile: [],
  //
  // isFetchingSignIn: false,
  // errorSignIn: null,
});

/* ------------- Reducers ------------- */
// const signInRequest = (state: AuthStateTypes) => {
//   return state.merge({
//     isFetchingSignIn: true,
//     errorSignIn: null,
//   });
// };
// const signInSuccess = (state: AuthStateTypes, {userProfile}: any) =>
//   state.merge({
//     userProfile,
//     isFetchingSignIn: false,
//     errorSignIn: null,
//   });
// const signInFailure = (state: AuthStateTypes, {errorSignIn}: any) =>
//   state.merge({isFetchingSignIn: false, errorSignIn});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  //   [Types.SIGN_IN_REQUEST]: signInRequest,
  //   [Types.SIGN_IN_SUCCESS]: signInSuccess,
  //   [Types.SIGN_IN_FAILURE]: signInFailure,
});

/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 00:37:24
 * @modify date 2021-10-04 00:37:24
 * @desc [description]
 */

import {call, put} from 'redux-saga/effects';
//  import AsyncStorage from '@react-native-community/async-storage';

// Redux
import AuthActions from '../Redux/AuthRedux';

// export function* signInSaga(api: any, action: any): any {
//   try {
//     // Sign in request
//     const signInResponse = yield call(api.signInApi, action.signInData);
//     if (signInResponse.ok && signInResponse.status === 200) {
//       if (signInResponse.data.status === 'success') {
//         const accessToken = signInResponse.data.data.access_token;
//         yield call(saveTokenToStoreSaga, accessToken);
//         yield put(AuthActions.signInSuccess(accessToken));
//       } else {
//         yield put(AuthActions.signInFailure(signInResponse.data.message));
//       }
//     } else {
//       yield put(AuthActions.signInFailure(signInResponse.data.message));
//     }
//   } catch (error) {
//     yield put(AuthActions.signInFailure(error));
//   }
// }

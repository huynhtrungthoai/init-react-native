import {all, takeLatest, put, take} from 'redux-saga/effects';

// Types
import {StartupTypes} from '../Redux/StartupRedux';
import {AuthTypes} from '../Redux/AuthRedux';

// Saga
import {startup} from './StartupSaga';
// import {signInSaga} from './AuthSaga';

// APIs
import AuthAPI from '../Services/AuthService';

// Api
const authApi = AuthAPI.create();

export default function* rootSaga() {
  // Startup
  yield all([takeLatest(StartupTypes.STARTUP, startup)]);

  // Authentication
  //   yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signInSaga, authApi)]);
}

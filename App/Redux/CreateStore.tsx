import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './index';
import mySaga from '../Sagas';
import logger from 'redux-logger';

const composeEnhancers = compose;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware, logger];

// Mount it on the Store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWares)),
);

// Then run the saga
sagaMiddleware.run(mySaga);
export default store;

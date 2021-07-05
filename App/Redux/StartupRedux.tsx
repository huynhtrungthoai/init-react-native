import {createActions, createReducer} from 'reduxsauce';
// import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators}: any = createActions({
  startup: null,
});

export const StartupTypes = Types;
export default Creators;

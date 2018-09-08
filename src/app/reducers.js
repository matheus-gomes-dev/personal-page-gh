/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import { combineReducers } from 'redux';
import headerReducer from '../header/headerReducer';

const rootReducer = combineReducers({
  language: headerReducer,
});

export default rootReducer;

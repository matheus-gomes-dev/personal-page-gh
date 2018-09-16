/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import { combineReducers } from 'redux';
import languagesReducer from '../languages/languagesMenuReducer';
import menuReducer from '../menu/menuReducers';

const rootReducer = combineReducers({
  language: languagesReducer,
  content: menuReducer,
});

export default rootReducer;

/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

const INITIAL_STATE = { language: 'br' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LANGUAGE_SWITCH':
      return { ...state, currentLanguage: action.payload };
    case 'LANGUAGE_DETECT':
      return { ...state, currentLanguage: action.payload };
    default:
      return state;
  }
}

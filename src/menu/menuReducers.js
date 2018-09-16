/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

const INITIAL_STATE = { currentContent: 'about' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CONTENT_TOGGLE':
      return { ...state, currentContent: action.payload };
    default:
      return state;
  }
}

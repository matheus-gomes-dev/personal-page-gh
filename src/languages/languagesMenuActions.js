/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

export const getLanguage = () => ({ type: 'LANGUAGE_SWITCH', payload: navigator.language.substring(0, 2) });
export const switchLanguage = language => ({ type: 'LANGUAGE_SWITCH', payload: language });


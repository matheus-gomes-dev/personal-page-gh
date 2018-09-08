/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import Header from '../header/header';
import Menu from '../menu/menu';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';

const props = () => (
  <LocalizeProvider>
    <Header />
    <Menu />
  </LocalizeProvider>
);

export default props;

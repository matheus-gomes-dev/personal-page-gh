/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import Header from '../header/header';
import Menu from '../menu/menu';
import LanguagesMenu from '../languages/languagesMenu';
import WhatsappBadge from '../whatsappBadge/whatsappBadge';
import Content from '../content/content';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

const props = () => (
  <LocalizeProvider>
    <Menu />
    <LanguagesMenu />
    <Header />
    <Content />
    <WhatsappBadge />
  </LocalizeProvider>
);

export default props;

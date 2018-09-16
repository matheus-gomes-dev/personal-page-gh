/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import languages from '../languages/languages';
import { HeaderGradient, HeaderImage, HeaderName, HeaderDescription } from './headerStyles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { currentLanguage: '', translations: '', displayLanguages: false };
    this.profilePic = React.createRef();
    this.name = React.createRef();
    this.profession = React.createRef();
  }

  componentWillMount() {
    const languageCode = this.props.language;
    this.setState({ ...this.state, translations: languages[languageCode] });
  }

  componentDidMount() {
    TweenMax.from(this.profilePic, 1, {
      y: -300,
    });
    TweenMax.from(this.name, 1, {
      y: 300,
      opacity: 0,
      delay: 1,
    });
    TweenMax.from(this.profession, 1.5, {
      x: 300,
      opacity: 0,
      delay: 2,
      ease: Elastic.easeOut.config(1, 0.3),
    });
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.language !== oldProps.language) {
      this.setState({
        ...this.state,
        currentLanguage: newProps.language,
        translations: languages[newProps.language],
        displayLanguages: false,
      });
    }
  }

  render() {
    const { translations } = this.state;
    return (
      <HeaderGradient>
        <div ref={(elem) => { this.profilePic = elem; }}>
          <HeaderImage />
        </div>
        <HeaderName>
          <span ref={(elem) => { this.name = elem; }}>Matheus de Lima Gomes</span>
        </HeaderName>
        <HeaderDescription>
          <span ref={(elem) => { this.profession = elem; }}>{translations.profession}</span>
        </HeaderDescription>
      </HeaderGradient>
    );
  }
}

/* --- props validation --- */
Header.propTypes = {
  language: PropTypes.string,
};
Header.defaultProps = {
  language: 'pt',
};
/* --- end of props validation --- */


const mapStateToProps = state => ({ language: state.language.currentLanguage });
export default connect(mapStateToProps, null)(Header);

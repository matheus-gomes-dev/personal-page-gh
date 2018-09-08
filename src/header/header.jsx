/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import languages from '../languages/languages';
import { getLanguage, switchLanguage } from './headerActions';
import { HeaderGradient, HeaderCurrentLanguage, HeaderLanguages, HeaderImage, HeaderName, HeaderDescription } from './headerStyles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { currentLanguage: '', translations: '', displayLanguages: false };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.showLanguages = this.showLanguages.bind(this);
  }

  componentWillMount() {
    this.props.getLanguage();
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

  changeLanguage(language) {
    const currentLanguage = this.props.language;
    if (currentLanguage === language) {
      this.setState({ ...this.state, displayLanguages: false });
      return;
    }
    // this.setState({ ...this.state, currentLanguage: language });
    this.props.switchLanguage(language);
  }

  showLanguages() {
    const newDisplayLanguagesState = !this.state.displayLanguages;
    this.setState({ ...this.state, displayLanguages: newDisplayLanguagesState });
  }

  render() {
    const { displayLanguages, translations, currentLanguage } = this.state;
    return (
      <HeaderGradient>
        <HeaderCurrentLanguage onClick={() => this.showLanguages()}>
          <img
            alt="Country's Language Flag"
            src={currentLanguage === 'pt' ?
              'https://cdn.rawgit.com/matheus-lima92/6c6d011534abc82e6aff4a562bea42e9/raw/eec0fe7f122b9bb4aac735e37f432253e3c58b1c/brasil.svg' :
              'https://cdn.rawgit.com/matheus-lima92/a2c5b8ae266a98b57f4ca2604d35bfab/raw/75503e0428c2a55fbfe015c949506941a895c0d3/eua.svg'
            }
          />
          <i className="fa fa-chevron-down" aria-hidden="true" />
          { displayLanguages &&
            <HeaderLanguages>
              { /* eslint-disable */ }
              <div onClick={() => this.changeLanguage('pt')}>
              { /* eslint-enable */ }
                <img
                  alt="Brazil Flag"
                  src="https://cdn.rawgit.com/matheus-lima92/6c6d011534abc82e6aff4a562bea42e9/raw/eec0fe7f122b9bb4aac735e37f432253e3c58b1c/brasil.svg"
                />
                <span>Português (BR)</span>
              </div>
              { /* eslint-disable */ }
              <div onClick={() => this.changeLanguage('en')}>
              { /* eslint-enable */ }
                <img
                  alt="USA Flag"
                  src="https://cdn.rawgit.com/matheus-lima92/a2c5b8ae266a98b57f4ca2604d35bfab/raw/75503e0428c2a55fbfe015c949506941a895c0d3/eua.svg"
                />
                <span>English (US)</span>
              </div>
            </HeaderLanguages>
          }
        </HeaderCurrentLanguage>
        <HeaderImage />
        <HeaderName>
          <span>Matheus de Lima Gomes</span>
        </HeaderName>
        <HeaderDescription>
          <span>{translations.profession}</span>
        </HeaderDescription>
      </HeaderGradient>
    );
  }
}

/* --- props validation --- */
Header.propTypes = {
  getLanguage: PropTypes.func,
  switchLanguage: PropTypes.func,
  language: PropTypes.string,
};
Header.defaultProps = {
  getLanguage: '',
  switchLanguage: '',
  language: 'pt',
};
/* --- end of props validation --- */


const mapStateToProps = state => ({ language: state.language.currentLanguage });
const mapDispatchToProps = dispatch => bindActionCreators({
  getLanguage,
  switchLanguage,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);

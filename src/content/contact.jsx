/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import languages from '../languages/languages';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '', translations: '' };
  }

  componentWillMount() {
    const languageCode = this.props.language;
    this.setState({ ...this.state, translations: languages[languageCode] });
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.language !== oldProps.language) {
      this.setState({
        ...this.state,
        translations: languages[newProps.language],
      });
    }
  }

  render() {
    const { translations } = this.state;
    return (
      <div style={{ border: '1px solid red', height: '30px' }} >
        { translations.contact }
      </div>
    );
  }
}


/* --- props validation --- */
Contact.propTypes = {
  language: PropTypes.string,
};
Contact.defaultProps = {
  language: '',
};
/* --- end of props validation --- */

const mapStateToProps = state => ({ language: state.language.currentLanguage });
export default connect(mapStateToProps, null)(Contact);

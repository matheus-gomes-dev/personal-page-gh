/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from './about';
import Education from './education';
import Contact from './contact';
import Professional from './professional';
import OpenSource from './openSource';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  componentWillMount() {
    const { content } = this.props;
    console.log(content);
    this.setState({ ...this.state, content });
  }

  componentDidMount() {
    // TweenMax.set(this.optionsMenu, { autoAlpha: 0 });
    // TweenMax.set(this.burgerMenu, { opacity: 0 });
    // TweenMax.to(this.burgerMenu, 0.2, {
    //   opacity: 1,
    //   delay: 3.5,
    // });
  }

  componentWillReceiveProps(newProps, oldProps) {
    console.log(newProps);
    if (newProps.content !== oldProps.content) {
      this.setState({
        ...this.state,
        content: newProps.content,
      });
    }
  }

  render() {
    const { content } = this.state;
    return (
      <div style={{ border: '1px solid red', height: '30px' }} >
        { content === 'about' && <About /> }
        { content === 'professionalExp' && <Professional /> }
        { content === 'education' && <Education /> }
        { content === 'openSource' && <OpenSource /> }
        { content === 'contact' && <Contact /> }
      </div>
    );
  }
}


/* --- props validation --- */
Content.propTypes = {
  content: PropTypes.string,
};
Content.defaultProps = {
  content: '',
};
/* --- end of props validation --- */

const mapStateToProps = state => ({ content: state.content.currentContent });
export default connect(mapStateToProps, null)(Content);

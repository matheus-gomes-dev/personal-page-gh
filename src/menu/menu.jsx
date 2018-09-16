/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import languages from '../languages/languages';
import changeContent from './menuActions';
import { BurgerMenu, OptionsMenu, Option } from './menuStyles';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { translations: '', isVisible: true };
    this.optionsMenu = React.createRef();
    this.burgerMenu = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
  }

  componentWillMount() {
    const languageCode = this.props.language;
    this.setState({ ...this.state, translations: languages[languageCode] });
  }

  componentDidMount() {
    TweenMax.set(this.optionsMenu, { autoAlpha: 0 });
    TweenMax.set(this.burgerMenu, { opacity: 0 });
    TweenMax.to(this.burgerMenu, 0.2, {
      opacity: 1,
      delay: 3.5,
    });
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.language !== oldProps.language) {
      this.setState({
        ...this.state,
        translations: languages[newProps.language],
      });
    }
  }

  toggleMenu() {
    TweenMax.to(this.optionsMenu, 0.2, { autoAlpha: this.state.isVisible ? 1 : 0 });
    const { isVisible } = this.state;
    this.setState({ ...this.state, isVisible: !isVisible });
  }

  toggleContent(section) {
    console.log(section);
    this.props.changeContent(section);
    this.toggleMenu();
  }

  render() {
    const { isVisible, translations } = this.state;
    return (
      <div ref={(elem) => { this.burgerMenu = elem; }}>
        { isVisible &&
          <BurgerMenu onClick={() => this.toggleMenu()}>
            <i className="fa fa-bars" aria-hidden="true" />
          </BurgerMenu>
        }
        <div ref={(elem) => { this.optionsMenu = elem; }}>
          <OptionsMenu>
            <div className="close-btn">
              <i className="fa fa-times" aria-hidden="true" onClick={() => this.toggleMenu()} />
            </div>
            <Option onClick={() => this.toggleContent('about')}>
              <i className="fa fa-user" aria-hidden="true" />
              <span>{translations.about}</span>
            </Option>
            <Option onClick={() => this.toggleContent('professionalExp')}>
              <i className="fa fa-briefcase" aria-hidden="true" />
              <span>{translations.professionalExp}</span>
            </Option>
            <Option onClick={() => this.toggleContent('education')}>
              <i className="fa fa-university" aria-hidden="true" />
              <span>{translations.education}</span>
            </Option>
            <Option onClick={() => this.toggleContent('openSource')}>
              <i className="fa fa-unlock-alt" aria-hidden="true" />
              <span>{translations.openSource}</span>
            </Option>
            <Option onClick={() => this.toggleContent('contact')}>
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <span>{translations.contact}</span>
            </Option>
          </OptionsMenu>
        </div>
      </div>
    );
  }
}


/* --- props validation --- */
Menu.propTypes = {
  language: PropTypes.string,
  changeContent: PropTypes.func,
};
Menu.defaultProps = {
  language: 'pt',
  changeContent: null,
};
/* --- end of props validation --- */

const mapStateToProps = state => ({ language: state.language.currentLanguage });
const mapDispatchToProps = dispatch => bindActionCreators({
  changeContent,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

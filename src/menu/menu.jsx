/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';

import languages from '../languages/languages';
import { BurgerMenu, OptionsMenu, Option } from './menuStyles';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { translations: '', isVisible: true };
    this.optionsMenu = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
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

  toggleMenu() {
    const tl = new TimelineMax();
    const { isVisible } = this.state;
    this.setState({ ...this.state, isVisible: !isVisible });
  }

  render() {
    const { isVisible, translations } = this.state;
    return (
      <div>
        { isVisible &&
          <BurgerMenu onClick={() => this.toggleMenu()}>
            <i className="fa fa-bars" aria-hidden="true" />
          </BurgerMenu>
        }
        { !isVisible &&
          <OptionsMenu ref={this.optionsMenu}>
            <div className="close-btn">
              <i className="fa fa-times" aria-hidden="true" onClick={() => this.toggleMenu()} />
            </div>
            <Option>
              <i className="fa fa-user" aria-hidden="true" />
              <span>{translations.about}</span>
            </Option>
            <Option>
              <i className="fa fa-briefcase" aria-hidden="true" />
              <span>{translations.professionalExp}</span>
            </Option>
            <Option>
              <i className="fa fa-university" aria-hidden="true" />
              <span>{translations.education}</span>
            </Option>
            <Option>
              <i className="fa fa-unlock-alt" aria-hidden="true" />
              <span>{translations.openSource}</span>
            </Option>
            <Option>
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <span>{translations.contact}</span>
            </Option>
          </OptionsMenu>
        }
      </div>
    );
  }
}


/* --- props validation --- */
Menu.propTypes = {
  language: PropTypes.string,
};
Menu.defaultProps = {
  language: 'pt',
};
/* --- end of props validation --- */

const mapStateToProps = state => ({ language: state.language.currentLanguage });
export default connect(mapStateToProps, null)(Menu);

/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import BadgeDiv from './whatsappBadgeStyle';

class WhatsappBadge extends Component {
  constructor(props) {
    super(props);
    this.whatsappBadge = React.createRef();
  }

  componentDidMount() {
    TweenMax.set(this.whatsappBadge, { opacity: 0 });
    TweenMax.to(this.whatsappBadge, 1.5, {
      opacity: 1,
      delay: 4,
    });
  }

  render() {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5519982079553&text="
        ref={(elem) => { this.whatsappBadge = elem; }}
        rel="noopener noreferrer"
        target="_blank"
      >
        <BadgeDiv />
      </a>
    );
  }
}

export default WhatsappBadge;

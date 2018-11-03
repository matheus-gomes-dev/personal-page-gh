/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import languages from '../languages/languages';

class About extends Component {
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
        { translations.about }
        <br /><br />
        Meu nome é Matheus de Lima Gomes, nasci em São Paulo e sou
        formado em engenharia pela Universidade Estadual de Campinas.
        Hoje trabalho como engenheiro front-end na Hypnobox, uma empresa de TI
        com foco no setor imobiliário. Anteriormente trabalhei como full-stack
        em uma equipe remota para a empresa Aktienow, onde além de desenvolver o Droz,
        chat-bot próprio da empresa, atuei em projetos para grandes clientes,
        como IBM, TOTVS e Telefônica.
        <br /><br />
        ** frase work with what you love... **
        <br /><br />
        O desenvolvimento de software é uma de minhas paixões, atuo profissionalmente
        na área desde 2012. Trabalhei durante um tempo com sistemas
        embarcados (eu sei Assembly, mas prometo que sou um cara legal haha),
        e depois mergulhei de cabeça no universo web, o que acabou sendo muito bom
        para me dar uma visão ampla de desenvolvimento e arquitetura de software.
      </div>
    );
  }
}


/* --- props validation --- */
About.propTypes = {
  language: PropTypes.string,
};
About.defaultProps = {
  language: '',
};
/* --- end of props validation --- */

const mapStateToProps = state => ({ language: state.language.currentLanguage });
export default connect(mapStateToProps, null)(About);

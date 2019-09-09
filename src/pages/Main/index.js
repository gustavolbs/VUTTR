/**
 * Página inicial da aplicação.
 *
 * Main
 * Componente que contém tudo que é exibido e realizado pelo front da aplicação.
 */
import React, { Component } from 'react';

import api from '../../services/api';

import { Container } from '../../components/Container';
import Header from '../../components/Header';
import HeaderInput from '../../components/HeaderInput';
import ToolsList from '../../components/ToolsList';

import './styles.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchTool: '',
      tools: [],
      err: null,
      checktag: false,
    };
  }

  async componentDidMount() {
    const tools = await api.get(`/tools`);

    if (tools) {
      this.setState({ tools: tools.data });
    }
  }

  handleInputChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: value, err: null });
  };

  handleSubmitSearch = async e => {
    e.preventDefault();

    this.setState({ err: false });

    try {
      const { searchTool, checktag } = this.state;

      const response = checktag
        ? await api.get(`/tools?tags_like=${searchTool}`)
        : await api.get(`/tools?q=${searchTool}`);

      await this.setState({
        tools: [...response.data],
      });
    } catch (err) {
      this.setState({
        err: true,
      });
    } finally {
      console.log('OK');
    }
  };

  render() {
    const { searchTool, tools, err, checktag } = this.state;
    return (
      <Container>
        <Header />
        <HeaderInput
          onSubmit={this.handleSubmitSearch}
          err={err}
          checked={checktag}
          onChange={this.handleInputChange}
          value={searchTool}
        />
        <ToolsList tools={tools} />
      </Container>
    );
  }
}

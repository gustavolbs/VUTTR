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
      checktag: false,
    };
    this.reloadData = this.reloadData.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  async componentDidMount() {
    this.reloadData();
  }

  handleInputChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: value });

    if (this.state.searchTool.length <= 1) {
      this.reloadData();
    } else {
      this.handleSubmitSearch();
    }
  };

  handleSubmitSearch = async e => {
    try {
      const { searchTool, checktag } = this.state;

      const response = checktag
        ? await api.get(`/tools?tags_like=${searchTool}`)
        : await api.get(`/tools?q=${searchTool}`);

      await this.setState({
        tools: [...response.data],
      });
    } catch (err) {}
  };

  async reloadData() {
    const tools = await api.get(`/tools`);

    if (tools) {
      this.setState({ tools: tools.data });
    }
  }

  render() {
    const { searchTool, tools, checktag } = this.state;
    return (
      <Container>
        <Header />
        <HeaderInput
          onSubmit={this.handleSubmitSearch}
          checked={checktag}
          onChange={this.handleInputChange}
          value={searchTool}
          reloadData={this.reloadData}
        />
        <ToolsList tools={tools} reloadData={this.reloadData} />
      </Container>
    );
  }
}

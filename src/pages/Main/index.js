import React, { Component } from 'react';

import api from '../../services/api';

import { Container } from '../../components/Container';
import {
  Header,
  Form,
  AddButton,
  Inputs,
  ToolsList,
  TagList,
  SubContainer,
} from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchTool: '',
      tools: [],
      loading: false,
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

  componentDidUpdate(prevProps, prevState) {
    const { tools } = this.state;
  }

  handleInputChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: value, err: null });
  };

  handleSubmitSearch = async e => {
    e.preventDefault();

    this.setState({ loading: true, err: false });

    try {
      const { searchTool, tools, checktag } = this.state;

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
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { searchTool, loading, tools, err, checktag } = this.state;
    return (
      <Container>
        <Header>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
        </Header>
        <SubContainer>
          <Form onSubmit={this.handleSubmitSearch} err={err}>
            <Inputs>
              <input
                type="text"
                name="searchTool"
                placeholder="search"
                value={searchTool}
                onChange={this.handleInputChange}
              />

              <label>
                <input
                  name="checktag"
                  type="checkbox"
                  checked={checktag}
                  onChange={this.handleInputChange}
                />
                <span>search in tags only</span>
              </label>
            </Inputs>
          </Form>
          <AddButton>+ Add</AddButton>
        </SubContainer>
        <ToolsList>
          {tools.map(tool => (
            <li key={tool.id}>
              <div>
                <a href={tool.link} target="_blank">
                  <span>{tool.title}</span>
                </a>
                <button type="submit">x remove</button>
              </div>
              <p>{tool.description}</p>
              <TagList>
                {tool.tags.map(tag => (
                  <li key={tag}>#{tag}</li>
                ))}
              </TagList>
            </li>
          ))}
        </ToolsList>
      </Container>
    );
  }
}

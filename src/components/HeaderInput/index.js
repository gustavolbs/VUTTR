import React from 'react';

import { FaSearch } from 'react-icons/fa';
import SimpleModal from '../AddModal';
import { Container, Form, InputContainer } from './styles';

export default function HeaderInput({
  onSubmit,
  err,
  checked,
  onChange,
  value,
  onClick,
}) {
  return (
    <Container>
      <Form onSubmit={onSubmit} err={err}>
        <Inputs checked={checked} onChange={onChange} value={value} />
      </Form>
      <SimpleModal />
    </Container>
  );
}

function Inputs({ value, onChange, checked }) {
  return (
    <InputContainer>
      <label className="searchContainer">
        <FaSearch />
        <input
          type="text"
          name="searchTool"
          placeholder="search"
          value={value}
          onChange={onChange}
        />
      </label>

      <label className="checkContainer">
        <input
          name="checktag"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="checkmark" />
        <span>search in tags only</span>
      </label>
    </InputContainer>
  );
}

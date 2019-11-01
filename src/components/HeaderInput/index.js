/**
 * HeaderInput
 * Componente que representa a agregação dos inputs que estão logo após o Header
 * e o botão de adição de uma ferramenta.
 *
 * Inputs
 * Componente que representa os inputs de pesquisa.
 *
 * Bibliotecas Adicionais
 *  - React Icons para os ícones
 */
import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { DebounceInput } from 'react-debounce-input';
import SimpleModal from '../AddModal';
import { Container, Form, InputContainer } from './styles';

export default function HeaderInput({
  inputErros,
  checked,
  onChange,
  value,
  reloadData,
}) {
  return (
    <Container>
      <Form onSubmit={e => e.preventDefault()}>
        <Inputs checked={checked} onChange={onChange} value={value} />
      </Form>
      <SimpleModal inputErros={inputErros} reloadData={reloadData} />
    </Container>
  );
}

function Inputs({ value, onChange, checked }) {
  return (
    <InputContainer>
      <label className="searchContainer">
        <FaSearch />
        <DebounceInput
          type="text"
          name="searchTool"
          placeholder="search"
          value={value}
          debounceTimeout={300}
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

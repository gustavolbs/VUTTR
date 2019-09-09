/**
 * Form
 * Styled Component que carrega as estilizações do form de inputs.
 *
 * Container
 * Styled Component que carrega a estilização de uma div que contém o form e o
 * botão de adição.
 *
 * AddButton
 * Styled Component que carrega a estilização do botão de adição de uma nova fer-
 * ramenta.
 *
 * InputContainer
 * Styled Component que carrega a estilização dos inputs e cria um checkbox dife-
 * rente do padrão.
 */
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button.attrs({
  type: 'text',
})`
  background-color: #365df0;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  label {
    display: flex;
    margin-left: 15px;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 5px;
    }
  }

  .searchContainer {
    background: #f5f4f6;
    border: 1px solid #ebeaed;
    margin-left: 0px;
    border-radius: 5px;
    color: #b1adb9;

    &:hover {
      background: #ebeaed;

      input {
        background: #ebeaed;
      }
    }

    input:focus {
      svg {
        color: #000;
      }
    }

    svg {
      margin-left: 10px;
    }

    & > input {
      border: none;
      background: #f5f4f6;
      padding: 10px;
    }

    & > input::placeholder {
      color: #b1adb9;
    }
  }

  .checkContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkContainer span.checkmark {
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 5px;
  }

  .checkContainer:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .checkContainer input:checked ~ .checkmark {
    background-color: #365df0;
  }
`;

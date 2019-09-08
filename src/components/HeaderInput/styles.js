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
`;

export const AddButton = styled.button.attrs({
  type: 'text',
})``;

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
`;

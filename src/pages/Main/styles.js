import styled from 'styled-components';

export const Header = styled.header``;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  margin-top: 40px;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const AddButton = styled.button.attrs({
  type: 'text',
})``;

export const Inputs = styled.div`
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

export const ToolsList = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    border: 0px solid #ddd;
    border-radius: 5px;
    box-shadow: 1px 1px 20px #aaa;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      a > span {
        font-size: 20px;
      }
    }

    button {
      border: none;
      background: transparent;
    }

    & + li {
      margin-top: 20px;
    }
  }
`;

export const TagList = styled.ul`
  display: flex;
  margin-top: 10px;
  font-weight: bold;

  li {
    margin-left: 5px;
    background: transparent;
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;

    & + li {
      margin-top: 0;
    }
  }
`;

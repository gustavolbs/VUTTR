import styled from 'styled-components';

export const ToolList = styled.ul`
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

      a > span {
        font-size: 20px;
      }
    }

    p {
      margin-bottom: 20px;
    }

    button {
      border: none;
      background: transparent;
    }

    & + li {
      margin-top: 20px;
    }

    ul {
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
    }
  }
`;

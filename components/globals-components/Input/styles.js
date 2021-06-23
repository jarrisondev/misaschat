import styled from 'styled-components'

export const InputStyled = styled.label`
  width: 100%;

  .inputContainer {
    align-items: center;
    background-color: #fafafa;
    border: 1px solid transparent;
    border-radius: 5px;

    display: flex;
    height: 2.5rem;
    width: 100%;

    img {
      padding-left: 0.5rem;
      width: 7%;
    }

    input {
      background-color: transparent;
      border: none;
      height: 100%;
      margin-left: 0.8rem;

      outline: none;
      width: 100%;

      &::placeholder {
        font-size: 1.1rem;
      }
    }

    &:focus-within {
      background-color: #e5f4ff;
      border: 1px solid #5dbdff;
    }
  }

  .errorsContainer {
    color: red;
    min-height: 1.8rem;
    width: 100%;
  }
`

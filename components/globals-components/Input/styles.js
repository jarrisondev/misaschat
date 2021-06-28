import styled from 'styled-components'

export const InputStyled = styled.label`
  width: 100%;

  input {
    background-color: #1a1a40;
    border: 0.1rem solid #45456b;
    border-radius: 0.9rem;
    color: #9292bb;

    height: 3.5rem;
    outline: none;
    padding: 0 1rem;
    width: 100%;

    &::placeholder {
      color: #45456b;
      font-size: 1.1rem;
    }

    &:focus {
      border: 0.1rem solid #0056fd;
    }
  }

  .errorsContainer {
    color: #45456b;
    margin-bottom: 0.5rem;
    margin-top: 0.2rem;
    min-height: 0.5rem;

    width: 100%;
  }
`

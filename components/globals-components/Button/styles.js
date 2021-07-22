import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: 0;
  cursor: pointer;
  outline: none;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    font-size: 0.9rem;
  }
`

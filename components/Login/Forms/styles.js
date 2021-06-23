import styled from 'styled-components'

export const FormStyled = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  width: 90%;

  p {
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 0.8rem;
    text-decoration: underline;

    transform: translate(0, 0);

    &:hover {
      transform: translate(0, -0.2rem);
      color: #31ff6c;
    }
  }

  button {
    background-color: #31ff6c;
    border: none;
    border-radius: 20px;
    color: white;

    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    height: 2.5rem;

    margin-top: 1.5rem;
    transition: 0.3s;
    width: 50%;

    &:hover {
      background: #11c054;
    }
  }
`

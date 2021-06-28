import styled from 'styled-components'

export const ModalStyled = styled.div`
  background-color: #dbdbdb50;
  display: ${(props) => (props.token ? 'initial' : 'none')};
  font-size: 1.2rem;
  height: 100%;

  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  div {
    align-items: center;
    background-color: #1e1e49;
    border-radius: 1rem;
    bottom: 0;

    display: flex;
    flex-direction: column;
    height: 9rem;
    justify-content: space-between;

    left: 0;
    margin: auto;
    padding: 1rem 2rem;
    position: absolute;

    right: 0;
    top: 0;
    width: 85%;

    button {
      background-color: #0056fd;
      border-radius: 1rem;
      color: white;
      font-weight: 700;

      height: 2.5rem;
      width: 70%;
    }
  }

  @media (min-width: 450px) {
    border-radius: 2rem;
  }
`

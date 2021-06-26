import styled from 'styled-components'

export const LoginStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: space-between;
  padding: 0 2rem;

  img {
    margin: 3rem auto 0 auto;
    width: 18rem;
  }

  .heroContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    h1 {
      font-size: 2.4rem;
      margin: 0;

      span {
        color: #0056fd;
      }
    }

    p {
      font-size: 1.1rem;
      font-weight: 100;
      line-height: 2rem;
      margin-top: 1.5rem;
    }
  }

  .buttonContainer {
    background-color: #3f3d56;
    border-radius: 1rem;
    display: flex;
    height: 3.5rem;

    justify-content: space-between;
    margin-bottom: 3rem;
    width: 100%;

    button {
      background-color: #0056fd;
      border-radius: 1rem;
      color: white;
      outline: none;

      width: 50%;

      &:nth-of-type(2) {
        background-color: #3f3d56;
        border-radius: 0 1rem 1rem 0;
      }
    }
  }
`
